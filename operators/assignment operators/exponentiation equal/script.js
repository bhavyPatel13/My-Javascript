// exponentiation equal symbol is **=
// a **= 4 same is a = a * a * a * a
// b **= 3 same is b = b * b * b

let a = 2;
a **= 5; // same as a = a * a * a * a * a
console.log("a =",a);

let b = 5;
b = b * b * b * b * b; // same as b **= 5
console.log("b =",b);