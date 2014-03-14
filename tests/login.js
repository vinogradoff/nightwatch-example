var mkdirp = require('mkdirp');
var startMoment = require('moment');
var folder='login-'+startMoment().format('YYYYDDMM-HHmm');
mkdirp('screenshots/'+folder, function(err) { 
    // path was created unless there was error
});

function _s(){
  var moment = require('moment');
  filename=moment().format('HHmmssS');
  this.saveScreenshot("screenshots/"+folder+"/"+filename+".png");
};

module.exports = {
  /*"Opt-in for ebay 3.0" : function (browser) {
    browser
      .url('http://cgi1.ebay.de/ws/eBayISAPI.dll?SetGuidforExpt&parm=AQABAAAAMJlpPqZCuMUmHrsVN4FqdGNYnC-BZVRCj0cmRmGSu2AQNj7CMgVANpnSie5rtZx77w**',_s)
  },*/
  "Login at eBay.de" : function (browser) {
    try {
      var ebaycredentials = require('./ebaycredentials.json');  
    } catch (err) {
      console.error('Couldn\'t load the ebay credentials file. Please ensure that ' +
        'you have the fbcredentials.json in the same folder as the test.')
      process.exit();      
    }
    browser
      .url("http://www.ebay.de",_s)
      .waitForElementVisible('body', 1000)
      .assert.containsText('#gh-ug', 'Einloggen')
      .click('#gh-ug a',_s)
      .waitForElementVisible('body', 1000)
      .assert.containsText('#mainCnt div div h2', 'Einloggen')
      .setValue('#userid', ebaycredentials.username)
      .setValue('#pass',ebaycredentials.password)
      .click('#sgnBt',_s)
      .waitForElementVisible('body', 1000)
      .assert.containsText('#gh-ug', ebaycredentials.username)
      .click('#gh-la',_s)
  },
  "Verify ebay 3.0" : function (browser) {
    browser
      .verify.cssClassPresent('#top div ul li:nth-child(2)','today')
      .end();
  }
  
};
