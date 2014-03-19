//include screenshot _s function
var fs = require('fs');
eval(fs.readFileSync('screenshot_helper.js')+'');

module.exports = {
 "Login at eBay.de" : function (browser) {
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
      .assert.containsText('#gh-ug', 'Hallo,')
      .click('#gh-la',_s)
  },
  "Verify ebay 3.0" : function (browser) {
    browser
      .assert.cssClassPresent('#top div ul li:nth-child(2)','today')
  },
  "Find collection" : function (browser) {
    browser
      .click('.today .rt', _s) //menu collections aka eBay Today
      .waitForElementVisible('body', 1000)
      .click('.trending-collections-browse-all-box a',_s) //link to trending collection
      .waitForElementVisible('body', 1000)
      .window_handles(function(result) {
        browser.assert.equal(result.value.length, 2, 'There should be two windows open.');
        var clnWindowHandle = result.value[1];
        browser.switchWindow(clnWindowHandle);
      })
      .click('.search a',_s) //search for collection
      .setValue('.box','sport',_s) //enter sport
      .click('.button',_s) //button search for collections
      .pause(4000,_s)
      .verify.containsText('.keyword-msg span', 'sport')
      .click('#collections div div .title a',_s) // the first collection
      .verify.containsText('.curatedBy', 'Kollektion erstellt von')
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
