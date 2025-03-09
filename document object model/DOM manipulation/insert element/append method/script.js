let newButton = document.createElement("button");
newButton.innerText = "Click me";
console.log(newButton);

let div = document.querySelector("div");     // in div tag end position add element using append
div.append(newButton);