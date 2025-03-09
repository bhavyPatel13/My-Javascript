let arr = [13, 59, 98];
let a = arr.map( (value, index, array) =>{
    console.log(value, index, array);
    return value + index;                       // return mean make new array in retuen value
})
console.log(a);
