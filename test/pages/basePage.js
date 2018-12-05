"use strict"

class BasePage {

	constructor() {
		this.url = '/'
	}

	open() {
		browser.url(this.url)
	}

	waitForElementToBeVisible(element, errorMsg) {
    browser.waitUntil(() => element.isVisible() === true,
      browser.options.waitforElementTimeout, errorMsg)
	}

	// when you're expecting more than one element to match your selector
	waitForElementsToBeVisible(selector, errorMsg) {
    browser.waitUntil(() => browser.elements(selector).value.length > 0,
      browser.options.waitforElementTimeout, errorMsg)
	}

	waitForElementToNotExist(element) {
		return element.waitForExist(browser.options.waitforElementTimeout, true)
	}
}

module.exports = BasePage
