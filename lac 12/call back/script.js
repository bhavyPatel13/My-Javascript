function sum(a, b) {
    console.log("a + b = ", a + b);
};

function calculator(c, d, callBack) {
    callBack(c, d);
};

calculator(13, 15, sum);                // first method

calculator(13, 15, () => {              // second method
    console.log(a + b);
});