let student = {
    name : "Bhavy Patel",
    age : 18,
    cgpa : 8.1,
    isPass : true
};

for ( let key in student ) {
    console.log( "key =", key , "  value =", student[key] );   
}


const trushit = {
    name : "trushit upadhyay",
    age : 21,
    cgpa : 8.3,
    isPass : true
};

console.log("");

for (let word in trushit) {
    console.log("key =", word, " Value =", trushit[word]);
}