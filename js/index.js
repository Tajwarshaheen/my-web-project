// student details
let name = prompt("Enter your name");
let rollNo = prompt("Enter your rollNo");
// subject
let  English = prompt("Enter your English  Marks");
let  software = prompt("Enter your  software Marks");
let hardware = prompt("Enter your  hardware Marks");
let urdu = prompt("Enter your urdu Marks");
let totalMarks = (software+hardware+urdu+English);
let percentage = totalMarks/520*100;
// output
console.log( "English Marks = "+English );
console.log( "Software Marks = "+software );
console.log( " Hardware Marks = "+ hardware );
console.log( "Urdu Marks = "+ urdu );
console.log( " Total Marks  = ", totalMarks );
console.log( " percentage = "+ percentage );



