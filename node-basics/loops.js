function countDownWhile(start, stop) {
  if (start < stop) {
    while(start < stop) {
        console.log("While: " + start);
        start++;
    }
  } else {
    console.log("start is not less than stop");
  }
}
function countDownFor(start, stop) {
   if (start < stop) {
     for (; start < stop; start++) {
        console.log("For: " + start);
     }
   } else {
       console.log("start was not less than stop");
   }   
}
countDownWhile(2,15);
countDownFor(1,12);
