var weather = require('./weather');
var url = "http://api.openweathermap.org/data/2.5/weather?q=Oakland&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0"
weather(url, function(currentWeather){
  console.log(currentWeather);
});
