//  constructor is automaticaly invoked by new
// initialize object
//  syntax
//      class myClass {
//          constructor() {..}
//          myMethod() {..}
//      }

class toyotaCar {
    constructor(brand, mileage) {
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let foutuner = new toyotaCar("foutuner", 10);
console.log(foutuner);
let lexus = new toyotaCar("lexus", 12);
 console.log(lexus);