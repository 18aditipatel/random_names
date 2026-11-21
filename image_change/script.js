
let img = document.querySelector("img");
let btn = document.querySelector("button");

let first_img = img.getAttribute("src");
let second_img = "https://images.unsplash.com/photo-1795061923828-222108d451f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
let showing_first = true;

btn.addEventListener("click", ()=> {
    if(showing_first){
        img.setAttribute("src","https://plus.unsplash.com/premium_photo-1795250504285-ba012121e2fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D");
    } else{
        img.setAttribute("src","https://images.unsplash.com/photo-1795061923828-222108d451f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D");
    }
    showing_first = !showing_first;
});

 
