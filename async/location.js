var url = 'http://ipinfo.io';
var request = require('request');
module.exports = function(callback) {
request({ url: url, json: true }, function(err, resp, body){
     if(err) {
        callback(); 
     } else {
       callback(body);
     }
  }
); 
}


