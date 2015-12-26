var weather = require('./weather');
var location = require('./location');

// set up yargs to have a --location or -l argument

re('yargs')
    .command('create', 'Specify the name of the account', function(yargs) {
       yargs.options({
           name: {
              demand: true,
              alias: 'n',
              description: 'Your account. For example: -n Facebook',
              type: 'string'
           },
           username: {
              demand: true,
              alias: 'u',
              description: "The username for your account",
              type: 'string'
           },
           password: {
             demand: true,
             alias: 'p',
             description: "The password for the account",
             type: 'string'
           },
           master: {
             demand: true,
             alias: 'm',
             description: "The master password to decrypt account info.",
             type: "string"
           }
       }).help('help', 'h');
    })
// if location provided call weather(location, callback);
// if not, use location function to get location

location(function(location) {
  if (!location) {
     console.log("Unable to guess location.");
     return;
  } else {
     console.log('city: ' + location.city);
     console.log('log/lat: ' + location.loc);
  }
});
weather(function(currentWeather){
  console.log(currentWeather);
});
