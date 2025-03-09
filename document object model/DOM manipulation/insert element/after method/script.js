let newButton = document.createElement("button");
newButton.innerText = "Click me";
console.log(newButton);

let div = document.querySelector("div");     //  div tag end position add element using append
div.after(newButton);