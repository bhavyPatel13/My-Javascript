class Employee {
    login(){
        console.log("Employee has logged in.");
    }  
    
    logout(){
        console.log("Employee has logged out.");
    }

    requestLeaves(Leaves){
        console.log(`Employee has request ${Leaves} leaves`);
        
    }
}

class programmer extends Employee {
    requestTea(X) {
        console.log(`Employee has request ${X} Tea`);
    }

    requestLeaves(name){
        super.requestLeaves(4)
        console.log("One extra is Granted");
    }
}

// let Bhavy = new Employee()
// Bhavy.login()
// Bhavy.requestLeaves(3)

let Kunj = new programmer()
Kunj.login()
Kunj.requestLeaves(Bhavy)
Kunj.requestTea(3)