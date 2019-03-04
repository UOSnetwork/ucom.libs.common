publish:
	git checkout master
	npm run-script build
	make check-project
	npm version ${VER}
	git push
	npm publish

check-project:
	/bin/bash ./check-project.sh
