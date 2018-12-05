"use strict"

const BasePage = require('./basePage')

class QuotePage extends BasePage {
  constructor() {
    super()
    this.url = '/energy/get-quote'
  }

  get quoteSummary() { return browser.element('div.quote--summary') }

  loaded() {
    super.waitForElementToBeVisible(this.quoteSummary,
      'Quote summary container not found, page might not have loaded properly')
		return true
  }
}

module.exports = new QuotePage()
