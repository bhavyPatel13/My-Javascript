let newButton = document.createElement("button");
newButton.innerText = "Click me";
console.log(newButton);

let div = document.querySelector("div");     // in div tag start position add element using append
div.prepend(newButton);


// let newBTN = document.createElement("H1");
// newBTN.innerText = "Hii Bhavy"                      // write same 
// document.querySelector("body").prepend(newBTN);