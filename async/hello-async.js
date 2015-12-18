/*
setTimeout(function() {
   console.log('1'); 
}, 2000);
setTimeout(function() {
   console.log('3'); 
}, 1000);
*/
console.log("Challenge:");
function printInTwoSeconds(message) {
  setTimeout(function() {
   console.log(message);
  },2000);
}
printInTwoSeconds("Print in two seconds.");
