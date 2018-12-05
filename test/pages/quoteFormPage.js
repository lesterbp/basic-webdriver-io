"use strict"

const BasePage = require('./basePage')

class QuoteFormPage extends BasePage {
  constructor() {
    super()
    this.url = '/energy/get-quote'
  }

  get name() { return browser.element('input[name="name"]') }
  get phone() { return browser.element('input[name="phone"]') }
  get email() { return browser.element('input[name="email"]') }
  get postcode() { return browser.element('input[name="postcode"]') }
  get submitButton() { return browser.element('button=Get a Free Quote') }
  get header() { return browser.element('h1') }

  loaded() {
    super.waitForElementToBeVisible(this.submitButton,
      'Get a free quote button not found, page might not have loaded properly')
		return true
  }

  headerVisible() {
    super.waitForElementToBeVisible(this.header,
      'Header is not shown')
		return true
  }

  fillUpForm(details) {
    this.name.setValue(details.name)
    this.phone.setValue(details.phone)
    this.email.setValue(details.email)
    this.postcode.setValue(details.postcode)
  }

  submitForm() {
    this.submitButton.click()
  }
}

module.exports = new QuoteFormPage()
