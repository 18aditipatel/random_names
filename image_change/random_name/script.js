
let container = document.querySelector(".container");
let btn = document.querySelector("button");

let names = ["Anaya","Sanaya","Rahul","Alia","Vicky","Rohan","Piyush","Riya","Manya","Tina"];

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * names.length);
    let h1 = document.createElement("h1");
    h1.textContent = names[random];
    container.appendChild(h1);
});


