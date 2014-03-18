//include screenshot _s function
var fs = require('fs');
eval(fs.readFileSync('screenshot_helper.js')+'');

/** 
*	test code
*/


module.exports = {
  "Show google.de" : function (browser) {
     browser
      .url("http://www.google.de",_s)
      .assert.containsText("#gbqfsa", "Google-Suche")
      .verify.containsText("#gbqfsb", "Bing-Suche")
      .end();
  }
};