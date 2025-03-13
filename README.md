# Active Media Queries

Finds a list of all active media queries supported by your browser. Will show you exactly what matches, plus it will respond to changes.

[See it live! 🚀](https://fidian.github.io/active-media-queries/)

## What's detected

* [Media Type](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types) - The output device type.
* [any-hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover) - Can the user hover over elements?
* [any-pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer) - Is there a pointing device? How accurate is it?
* [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio) - The width-to-height aspect ratio of the viewport.
* [color](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color) - Number of bits of color.
* [color-gamut](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut) - Color range supported for output.
* [color-index](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-index) - Number of indexed colors for display.
* [device-aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/device-aspect-ratio) - DEPRECATED - Width-to-height aspect ratio of output.
* [device-height](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/device-height) - DEPRECATED - Output device height.
* [device-posture](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/device-posture) - If viewport is flat or folded.
* [device-width](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/device-width) - DEPRECATED - Output device width.
* [display-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode) - How the application is being displayed.
* [dynamic-range](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range) - The combination of brightness, contrast ratio, and color depth.
* [forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors) - Does the user agent restrict colors?
* [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/grid) - Does the device use a grid or a bitmap screen? 0 is bitmap, 1 is grid.
* [height](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height) -  The output device height.
* [hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) - Can the user hover over elements?
* [inverted-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors) - Is the user agent or OS inverting colors?
* [monochrome](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome) - Bits per pixel in the device's monochrome frame buffer.
* [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation) - Viewport orientation.
* [overflow-block](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-block) - How does the device handle overflows along the block axis?
* [overflow-inline](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-inline) - Can content overflowing the inline axis be scrolled?
* [pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer) - Is the input a pointing device? How accurate is it?
* [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) - Does the user prefer a light or dark color scheme?
* [prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) - Did the user change the amount of contrast between adjacent colors?
* [prefers-reduced-data](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data) - Has the user requested web content that consumes less bandwidth?
* [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) - Does the user prefer less motion?
* [prefers-reduced-transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) - Does the user want less transparency or translucent layer effects?
* [resolution](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/resolution) - Output pixel density.
* [scan](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scan) - Is the display progressive or interlaced?
* [scripting](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting) - Is JavaScript enabled?
* [shape](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/shape) - Distinguish regular and round displays.
* [update](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/update) - How frequently can the device modify the appearance of content.
* [video-dynamic-range](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range) - Combination of brightness, contrast ratio, and color depth supported by video.
* [width](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width) - Width of the viewport, including scrollbar.

## Need more?

The repository contains a file called `queries.json` that drives everything. Update it and use `make` to build the HTML and the README.
