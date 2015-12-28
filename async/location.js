var url = 'http://ipinfo.io';
var request = require('request');
module.exports = function(callback) {
  return new Promise(function(resolve, reject) { 
      request({ url: url, json: true }, function(err, resp, body){
             if(err) {
                reject('Unable to guess location.'); 
             } else {
                resolve(body);
             }
         });
    });
}
