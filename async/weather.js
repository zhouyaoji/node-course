var request = require('request');
var url = "http://api.openweathermap.org/data/2.5/weather?"; 
module.exports = function(loc, callback) {
  url += "q=" + loc + "&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0";
request({ url: url, json: true }, function(err, resp, body){
     if(err) {
        callback("Unable to fetch weather."); 
     } else {
       callback("The temperature is " + body.main.temp + " degrees in " + body.name + ".");
     }
  }
); 
}


