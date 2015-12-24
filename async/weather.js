var request = require('request');
module.exports = function(url, callback) {
request({ url: url, json: true }, function(err, resp, body){
     if(err) {
        callback("Unable to fetch weather."); 
     } else {
       callback("The temperature is " + body.main.temp + " degrees in " + body.name + ".");
     }
  }
); 
}


