class person {
    constructor(name) {
        this.spicies = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}


class Engineer extends person{
    constructor(name) {
        super(name);     // to invoke perent class constuctor
    }
    work() {
        super.eat();
        console.log("solve bug, build website");
    }
}

let engObj = new Engineer("Bhavy");