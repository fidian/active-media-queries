.PHONY: clean

all: README.md index.html

clean:
	rm -f README.md

README.md: scripts/build-readme queries.json
	scripts/build-readme > README.md

index.html: scripts/build-index queries.json
	scripts/build-index > index.html
