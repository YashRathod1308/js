// Q1
let newBtn=document.createElement("button");
newBtn.innerText="Clik me";

document.querySelector("body").prepend(newBtn);
newBtn.style.backgroundColor="red";
newBtn.style.color="white";

//Q2

let para=document.querySelector("p");
para.classList.add("newClass");