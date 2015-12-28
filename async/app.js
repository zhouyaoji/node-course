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
   weather(argv.l).then(function(currentWeather) {
     console.log(currentWeather);
   }).catch(function(error) {
     console.log(error);
   });
} else {
   location().then(function(loc) {
     return weather(loc.city);
    }).then(function(currentWeather) {
       console.log(currentWeather);
    }, function(error) {
         console.log(error);
    });
}      
