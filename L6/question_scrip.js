//  Q1
let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText +" from apna collage student";


// Q2
let box=document.querySelectorAll(".box");
let idx=1;
for(div of box){
    div.innerText=`New Div ${idx}`;
    idx++;
}