// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);
// // console.log(box.setAttribute("id","newid"));

// let div=document.querySelector("div");
// div.style.backgroundColor="green";

let newBtn=document.createElement("button");
newBtn.innerText="Click me";
console.log(newBtn);

let p=document.querySelector("p");
p.after(newBtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hello I'm Yash</i>";

document.querySelector("body").prepend(newHeading);

let para=document.querySelector("p");
para.remove();

