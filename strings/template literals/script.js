// template literals is a type of a string
// template literal is a way to have embadded expressions in strings
// syntax 
//     string name`print code`;

let student = {
    name : "Bhavy Patel",
    age : 17 ,
    state : "Gujarat",
    District : "Rajkot",
    isStudent : true 
};
output = `My name is ${student.name} and I am ${student.age} years old and I am`;
output2 = `He is a student of the parul university = ${student.isStudent}`
console.log(output);
console.log(output2);
