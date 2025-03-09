function gatData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data = ",dataId);
            resolve("success");
        }, 2000);
    });
};

gatData(1)
    .then( (res) => {
        return getData(2);
    })
    .then( (res) => {
        console.log(res);
        
    })
