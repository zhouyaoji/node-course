var grades = [100,50,75, 97];
grades.push(89);
//totalGrade
var totalGrade = 0;

// forEach -> add grade to total grade
grades.forEach(function(_) {
  totalGrade += _;
});
var average = totalGrade/grades.length;
console.log(average);
