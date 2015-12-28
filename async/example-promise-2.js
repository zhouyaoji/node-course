function getLocation () {
   return new Promise(function(resolve, reject) {
     resolve("Oakland");
   });     
}

function getWeather (location) {
  return new Promise(function(resolve, reject) {
    if(location) {
      resolve("It's 78 in " + location);
    } else {
      reject("The location was not provided!");
   }
  });
}

getLocation().then(function(location) {
   return getWeather(location);
}).then(function(currentWeather) {
   console.log(currentWeather);
}).catch(function(error) {
   console.log(error);
});
