let promise = new Promise((resolve, reject) => {
    console.log("I am a promise..");
    reject("Some Error");
});


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data = ",dataId);
            resolve("succsess");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
};
let result = getData(123);
console.log(result);