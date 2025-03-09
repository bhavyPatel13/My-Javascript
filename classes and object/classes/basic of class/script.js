class toyotaCar {                           // company car blueprint in car this this function needed
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

let foutuner = new toyotaCar();
foutuner.setBrand("foutuner");
let lexus = new toyotaCar();
lexus.setBrand("lexus");

console.log(foutuner);
console.log(lexus);