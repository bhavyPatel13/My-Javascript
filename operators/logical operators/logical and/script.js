// logical and symbol is &&
// in logical and ans true need all conditions to be true
// in other case final ans is false

let a = 6;
let b = 5;

let cond1 = a > b;  // true
let cond2 = a == 6;  // true
console.log("cond1 && cond2 =",cond1 && cond2);  // true


let c = 10;
let d = 20;

let cond3 = c > d;  // false
let cond4 = c == 10;  // true
console.log("cond3 && cond4 =",cond3 && cond4);  // false