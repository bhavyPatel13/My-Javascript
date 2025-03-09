// logical OR symbol is ||
// in logical or ans true need one conditions to be true
// in both condition false so logical or is false

let a = 6;
let b = 5;

let cond1 = a > b;  // true
let cond2 = a == 6;  // true
console.log("cond1 || cond2 =",cond1 || cond2);  // true

let cond3 = a > b;  // true
let cond4 = a == 7;  // false
console.log("cond3 || cond4 =",cond3 || cond4);  // true


let c = 10;
let d = 20;

let cond5 = c > d;  // false
let cond6 = c == 10;  // true
console.log("cond5 || cond6 =",cond5 || cond6);  // true

let cond7 = c > d;  // false
let cond8 = c == 20;  // false
console.log("cond7 || cond8 =",cond7 || cond8);  // false