//  syntax
//     object .__proto__ = second object

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const Bhavy = {
    salary : 50000 ,    
};

const Trushit = {
    salary : 60000 ,
};

const Nishant = {
    salary : 70000 ,
};

const Tushar = {
    salary : 80000 ,
}

Bhavy.__proto__ = employee;
Trushit.__proto__ = employee;
Nishant.__proto__ = employee;
Tushar.__proto__ = employee;

console.log(Bhavy.calcTax());
console.log(Trushit.calcTax());
console.log(Nishant.calcTax());
console.log(Tushar.calcTax());


// let a = {
//     name : "Bhavy Godhavia" ,
//     college : "Parul University" ,
//     CGPA : 6.25 , 
//     function : function () {
//         console.log(this.CGPA);
//     }
// }
// console.log(a);
