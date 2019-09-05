publish:
	git checkout master
	make check-project-before-publishing
	npm version ${VER}
	git push
	npm publish

check-project-not-committed-changes:
	/bin/bash ./ci-scripts/check-project-not-committed-changes.sh

check-project-npm-outdated:
	/bin/bash ./ci-scripts/check-project-npm-outdated.sh

check-project-before-commit cbc:
	make check-by-eslint
	make check-project-npm-outdated
	make check-by-snyk

check-project-before-publishing cbp:
	make check-project-before-commit
	make check-project-not-committed-changes

compile-typescript:
	npm run compile-ts

compile-typescript-watch:
	npm run compile-ts-watch

check-by-eslint:
	npm run check-by-eslint

check-by-snyk:
	snyk test

print-current-version pcv:
	npm list | grep 'common'
