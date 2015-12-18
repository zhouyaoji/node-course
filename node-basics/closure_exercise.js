function createAdder(baseNumber) {
  return function(numberToAdd) {
           return numberToAdd + baseNumber;
  }
}
var addTen = createAdder(10);
var addSix= createAdder(6);
console.log(addTen(2));
console.log(addSix(6));
