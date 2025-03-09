let arr = [16, 59, 133, 183];
// method 1
let abc = arr.reduce( (h1, h2) => {
  return h1 + h2;
})
console.log(abc);


// method 2
const reed = (h1, h2) => {
    return h1 + h2; 
}
let ner = arr.reduce(reed);
console.log(ner);