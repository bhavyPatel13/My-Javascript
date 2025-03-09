let arr = [1, 2, 3, 4, 5];
let ar = ["a", "b", "c", "d", "e"];

arr.forEach( function Bhavy(val, idx, arr) {
    console.log(val, idx, arr);     
} );

arr.forEach( (val, idx, ar) => {    
    console.log( val, idx, ar );   
} );        

let a = ["Bhavy", "Palak", "Kunj", "Kavy"];
a.forEach( (value, index, array) => {
    console.log(value, index, array);
})

