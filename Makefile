deps:
	npm install
	./node_modules/.bin/selenium-standalone install
.PHONY: deps	

test:
	./node_modules/.bin/wdio wdio.conf.js
.PHONY: test

selenium:
	./node_modules/.bin/selenium-standalone start
.PHONY: selenium
