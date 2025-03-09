//  ek class ni value biju class ma write karya vagar print karava mate inheritance use thay 6
// if child and parent have same method, child's method will be used[method overriding]
//  syntax
//      class child extands parent {...}

class parent {
    constructor(name){
        this.name = name;
    }
    hello() {
        console.log("Hello! Bhavy");
    }
    Eat() {
        console.log(this.name + " " + "Eat chapati");
    }
    Drink() {
        console.log(this.name + " " + "Drink Water and Juice");
    }
}

class middleChild extends parent{
    study(a){
        console.log(this.name + " " + "standard" + " " + a + " " + "class");
    }
    play(game) {
        console.log(this.name + " " + "play" + " " + game +  " " + "game");
    }
}

class child extends parent{
    Drink() {
        console.log(this.name + " " + "Drink milk");
    }
    Eat() {
        console.log(this.name + " " + "eat bhakhri");
    }
}
let shivu = new child("shivu");  
let papa = new parent("Bhavy");
let mummy = new parent("Nisha");
let di = new middleChild("Krisha");

shivu.hello();
shivu.Drink();
shivu.Eat();
papa.Drink();
mummy.Eat();
di.study(10);
di.play("basketball");