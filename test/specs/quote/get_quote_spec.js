const sh = require("shorthash")
const expect = require('chai').expect
const quoteFormPage = require('../../pages/quoteFormPage')
const quotePage = require('../../pages/quotePage')

describe('Get a Quote Page', () => {
  const formData = {
    name: 'Test Tester',
    phone: '0400000000',
    email: `${sh.random()}@mailinator.com`,
    postcode: '2000',
  }

  it('should submit the form and get a quote', () => {
    quoteFormPage.open()
    expect(quoteFormPage.loaded()).to.be.true
    expect(quoteFormPage.headerVisible()).to.be.true
    console.log({ formData })
    quoteFormPage.fillUpForm(formData)
    browser.pause(1000)
    quoteFormPage.submitForm()
    expect(quotePage.loaded()).to.be.true
    browser.pause(1000)
  })
})
