/** 
*	screenshot handling
*/
var screenshotPath='screenshots'; 

var path=require('path');
var mkdirp = require('mkdirp');
var startMoment = require('moment');
var folder=path.basename(__filename)+'-'+startMoment().format('YYYYDDMM-HHmm');
mkdirp(screenshotPath+'/'+folder, function(err) { 
    // path was created unless there was error
});

function _s(){
  var moment = require('moment');
  filename=moment().format('HHmmssS');
  this.saveScreenshot(screenshotPath+'/'+folder+"/"+filename+".png");
};

/** 
*	test code
*/


module.exports = {
  "Show google.de" : function (browser) {
     browser
      .url("http://www.google.de",_s)
      .assert.containsText("tralala", "55")
      .end();
  }
};