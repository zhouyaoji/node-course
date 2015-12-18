function greetMaker(name) {
  function greet(){
    console.log("Hello " + name + "!"); 
  }
  return greet;
}
var greetAndrew = greetMaker('Andrew');
greetAndrew();
var greetWorld = greetMaker('world');
greetWorld();
