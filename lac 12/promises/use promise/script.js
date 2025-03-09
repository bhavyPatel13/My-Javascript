// .then run when resolve passing
// .catch run when reject passing
//  syntax
//      promise.then( () => {...} );
//      promise.catch( () => {...} );

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        //resolve("Your request has been send successfuly");
        reject("Your request has been unsend ");
    });
};


let promise = getPromise();
promise.then( (result) => {
    console.log("Promise fulfilled", result);
})

promise.catch( (error) => {
    console.log("rejected", error);
})