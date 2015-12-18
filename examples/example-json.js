var person = {
  name: 'Andrew',
  age: 24
};

var personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);

console.log("Challenge area:");

var animal = '{"name": "Snow"}';
// convert to JSON
console.log("Converting '" + animal + "' to JSON.");
var animalJSON = JSON.parse(animal);
console.log("Adding age property.");
animalJSON.age = 6;
console.log("Changing 'animal' back to a string.");
var animalString = JSON.stringify(animalJSON);
// convert back to JSON
console.log(animalString);
console.log(typeof animalString);
// log out
console.log("Done with project");

