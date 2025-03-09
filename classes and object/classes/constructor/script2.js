class railwayForm {
    constructor(givename, trainNo, address) {
        console.log("constructor called...." + givename + " " + trainNo);
        this.name = givename;
        this.trainNo = trainNo;
        this.address = address;
    }

    preview(){
        alert(this.name + ": Your form is for train number: " + this.trainNo + "and address is " + this.address);
    }

    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainNo);
    }

    cancel(){
        alert(this.name + ": Your form is cancelled for train number: " + this.trainNo);
        this.trainNo = 0;   
    }
}

let bhavy = new railwayForm("bhavyPatel", 150, "rajkot,Gujarat");
bhavy.preview();
bhavy.submit();
bhavy.cancel();
bhavy.preview();