var weather = require('./weather');
var location = require('./location');
// set up yargs to have a --location or -l argument
var argv = require('yargs')
  .option('location', {
    alias: 'l',
    type: 'string',
    describe: 'Specify the location to check the weather.'
  }).help('help', 'h')
  .argv

if (typeof argv.l === 'string' && argv.l.length > 0) {
    weather(argv.l, function(currentWeather){
        console.log(currentWeather);
    });
} else {
  location(function(location) {
    if (!location) {
       console.log("Unable to guess location.");
       return;
    } else {
      weather(location.city, function(currentWeather) {
        console.log(currentWeather);
      });
    }
   });
}
