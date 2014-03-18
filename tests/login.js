//include screenshot _s function
var fs = require('fs');
eval(fs.readFileSync('screenshot_helper.js')+'');

module.exports = {
 "Login at eBay.de" : function (browser) {
    try {
      var ebaycredentials = require('./ebaycredentials.json');  
    } catch (err) {
      console.error('Couldn\'t load the ebay credentials file. Please ensure that ' +
        'you have the fbcredentials.json in the same folder as the test.')
      process.exit();      
    }
    browser
      .url(browser.launch_url,_s)
      .waitForElementVisible('body', 1000)
      .assert.containsText('#gh-ug', 'Einloggen')
      .click('#gh-ug a',_s)
      .waitForElementVisible('body', 1000)
      .assert.containsText('#mainCnt div div h2', 'Einloggen')
      .setValue('#userid', browser.options.ebaycredentials.username)
      .setValue('#pass', browser.options.ebaycredentials.password)
      .click('#sgnBt',_s)
      .waitForElementVisible('body', 1000)
      .assert.containsText('#gh-ug', ebaycredentials.username)
      .click('#gh-la',_s)
  },
  "Verify ebay 3.0" : function (browser) {
    browser
      .verify.cssClassPresent('#top div ul li:nth-child(2)','today')
      .end();
  },
  "Find collection" : function (browser) {
  },
  "Add item to new collection" : function (browser) {
  },
  "Show collection page" : function (browser) {
  },
  "Delete collection" : function (browser) {
  },
  "Logout" : function (browser) {
  }
};
