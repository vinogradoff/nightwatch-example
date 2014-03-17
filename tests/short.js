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
  "Show google.de" : function (browser) {
     browser
      .url("http://www.google.de",_s)
      .end();
  }
};