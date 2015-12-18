function doSomething() {
  throw new Error("Can't seem to do anything!");
}

try {
  doSomething();
} catch(e.message) {
  console.log("Something went wrong.");
} finally {
  console.log("Finally we can say something.");
}
console.log("Try-catch ended.");
