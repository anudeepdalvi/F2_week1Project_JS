/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(student => {
    if(student.marks > 50) {
      console.log(student);
    }
  });
} 
PrintStudentswithMap();

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
    if(student.marks > 50) {
      console.log(student);
    }
  });
} PrintStudentsbyForEach();

function addData() {
  //Write your code here, just console.log
  console.log(addData());
}

function removeFailedStudent() {
  //Write your code here, just console.log
  console.log(removeFailedStudent());
}

function concatenateArray() {
  //Write your code here, just console.log
  console.log(concatenateArray());
}
