var age = 24;
console.log(age);
function localFunction() {
   var age = 0;
   age = 0;
}
localFunction();
console.log(age);
