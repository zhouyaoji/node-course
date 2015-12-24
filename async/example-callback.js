var weather = require('./weather');
var url = "http://api.openweathermap.org/data/2.5/weather?q=Oakland&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0"
weather(url, function(currentWeather){
  console.log(currentWeather);
});

/*
request({ url: url, json: true }, function(err, resp, body){
     if(err) {
        console.log("Unable to fetch weather."); 
     } else {
       console.log("The temperature is " + body.main.temp + " degrees in " + body.name + ".");
     }
  }
);
*/
