module.exports = {
  "Opt-in for ebay 3.0" : function (browser) {
    browser
      .url('http://cgi1.ebay.de/ws/eBayISAPI.dll?SetGuidforExpt&parm=AQABAAAAMJlpPqZCuMUmHrsVN4FqdGNYnC-BZVRCj0cmRmGSu2AQNj7CMgVANpnSie5rtZx77w**')
  },
  "Login at eBay.de" : function (browser) {
    browser
      .url("http://www.ebay.de")
      .waitForElementVisible('body', 1000)
      .assert.containsText('#gh-ug', 'Einloggen')
      .click('#gh-ug a')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#mainCnt div div h2', 'Einloggen')
      .setValue('#userid', '2014detestu')
      .setValue('#pass','EGu-TFw-M7C-W9g')
      .click('#sgnBt')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#gh-ug', '2014detestu')
      .click('#gh-la')
  },
  "Verify ebay 3.0" : function (browser) {
    browser
      .verify.cssClassPresent('#top div ul li:nth-child(2)','today')
      .pause(10000)
      .end();
  }
  
};
