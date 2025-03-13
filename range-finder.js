Fudgel.component('range-finder', {
    attr: ['query', 'decimals', 'unit'],
    template: `@media
        <span *if="invalid">({{query}}) /* {{invalid}} */</span>
        <span *if="!invalid">
            <span *if="!exact && min === max">
                (min-{{query}}: {{min}}{{unit}}) and (max-{{query}}: {{max}}{{unit}}) /* Actual value is within this range */
            </span>
            <span *if="!exact && min !== max">
                ({{query}}: {{min}}{{unit}}) and ({{query}}: {{max}}{{unit}}) /* Exact queries match a range */
            </span>
            <span *if="exact">
                ({{query}}: {{min}}{{unit}})
            </span>
        </span>`
}, class {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.removeListeners = [];
    }

    onChange(propName) {
        if (propName !== 'query' && propName !== 'decimals' && propName !== 'unit') {
            return;
        }

        if (!this.query || this.decimals === undefined || this.unit === undefined) {
            return;
        }

        this.invalid = false;

        if (!this.match('min-', 0)) {
            this.invalid = `min-${this.query}: 0 failed to match`;
            return;
        }

        this.recalculate();
    }

    recalculate() {
        // Remove old listeners
        for (const removeListener of this.removeListeners) {
            removeListener();
        }

        // Scan and find the edge for maximum using a base-10 search.
        let min = 0;
        let max = 1;
        const decimals = +this.decimals;
        const minSize = Math.pow(10, -decimals);

        // Grow while it does not match
        while (
            !this.match('max-', max) &&
            max < Number.MAX_SAFE_INTEGER
        ) {
            max *= 10;
        }

        if (max >= Number.MAX_SAFE_INTEGER) {
            this.invalid = `max-${this.query} appears infinite`;
            return;
        }

        // Shrink
        let step = Math.pow(10, Math.floor(Math.log10(max)));
        const initialStep = step;

        while (step >= minSize) {
            while (this.match('max-', max - step)) {
                max -= step;
            }

            step /= 10;
        }

        // We now have a border where going smaller does not match.
        this.min = this.toFixed(max);

        // Scan larger to find the maximum
        step = initialStep;

        while (step >= minSize) {
            while (this.match('min-', max + step)) {
                max += step;
            }

            step /= 10;
        }

        this.max = this.toFixed(max);
        this.exact = this.min === this.max && this.match('', max);;

        // Finally, set up listeners.
        const notify = () => this.recalculate();
        const withinQueryList = window.matchMedia(this.matchQuery('', max))
        withinQueryList.addEventListener('change', notify);
        const beyondQueryList = window.matchMedia(this.matchQuery('', max + minSize))
        beyondQueryList.addEventListener('change', notify);
        this.removeListeners.push(() => withinQueryList.removeEventListener('change', notify));
        this.removeListeners.push(() => beyondQueryList.removeEventListener('change', notify));
    }

    match(type, value) {
        const query = this.matchQuery(type, value);
        // console.log(query, window.matchMedia(query).matches);
        return window.matchMedia(query).matches;
    }

    matchQuery(type, value) {
        return `(${type}${this.query}: ${this.toFixed(value)}${this.unit})`;
    }

    toFixed(value) {
        return value.toFixed(this.decimals).replace(/\.?0+$/, '');
    }
});
