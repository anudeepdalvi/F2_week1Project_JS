/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
// ***************** PrintStudentswithMap() *********************
function PrintStudentswithMap() {
  //Write your code here , just console.log
  
  arr.map(student => {
    if(student.marks > 50) {
      console.log(student);
    }
  });
} 
PrintStudentswithMap();
// **************************************************************


// ***************** PrintStudentsbyForEach() *********************
function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  
  arr.forEach(student => {
    if(student.marks > 50) {
      console.log(student);
    }
  });
} 
PrintStudentsbyForEach();
// **************************************************************


// ***************** addData() *********************
function addData() {
  //Write your code here, just console.log
  
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}
addData();
// **************************************************************


// ***************** removeFailedStudent() *********************
function removeFailedStudent() {
  //Write your code here, just console.log

  arr.filter(student => {
    if(student.marks > 50) {
      console.log(student);
    }
  });
}
removeFailedStudent();
// **************************************************************


// ***************** concatenateArray() *********************
function concatenateArray() {
  //Write your code here, just console.log

  let arr2 = [
  { id: 5, name: "bigg", age: "33", marks: 30 },
  { id: 6, name: "boss", age: "43", marks: 60 },
  { id: 7, name: "season", age: "53", marks: 90 },
  ];
  
  console.log(arr.concat(arr2));
}
concatenateArray();
// **************************************************************
