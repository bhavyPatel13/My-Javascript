const divbtn = document.querySelector("div.b1")

divbtn.onmouseover = () => {
    console.log("Hi, Bhavy");
    let std = {
        Name : "Bhavy Godhavia",
        Age : 18,
        School : "Dream Internation school, Dhorji",
        Course : "B.tech",
        Precentage : 76.98,
        isPass : true,
    }
    for(let i in std){
        console.log("key = ", i, "    value = ",std[i]);
    }
}