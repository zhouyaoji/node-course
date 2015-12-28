var request = require('request');
module.exports = function(loc) {

 var url = "http://api.openweathermap.org/data/2.5/weather?"; 
  return new Promise(function(resolve, reject) { 
     if (!loc) {
        return reject('No location provided.');
     } else {
         url += "q=" + encodeURIComponent(loc) + "&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0";       
         request({ url: url, json: true }, function(err, resp, body){
             if(err) {
                reject("Unable to fetch weather."); 
             } else {
                resolve("The temperature is " + body.main.temp + " degrees in " + body.name + ".");
             }
         });
      }
  });
}
