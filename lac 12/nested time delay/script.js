function getData(dataId, getNestData) {
    setTimeout( () => {
        console.log("Data = ",dataId);
        if (getNestData) {
            getNestData();
        }
    }, 2000);
};

getData(1, () => {
    console.log("getting data2 ....");
    getData(2, () => {
        console.log("getting data3 ....");
        getData(3, () => {
            console.log("getting data4 ....");
            getData(4, () => {
                console.log("getting data3 ....");
                getData(5);
            });
        });
    });
});