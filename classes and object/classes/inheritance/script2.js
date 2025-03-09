class animal {
    constructor(name, color) {
        this.name = name  
        this.color = color
    }
    run(){
        console.log(this.name + "is running");
    }
    shout(){
        console.log(this.color + "is shouting");
    }
}
class monky extends animal{
    eat(){
        console.log("");
        
    }
}

let dog = new animal("bruno", "Black");