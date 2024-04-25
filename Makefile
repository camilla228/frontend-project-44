install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/calc.js
brain-even:
	node bin/even.js
brain-gcd:
	node bin/gcd.js
brain-prime:
	node bin/prime.js
brain-progression:
	node bin/progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix