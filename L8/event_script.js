let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log("Btn1 was cliked");
//     let a=25;
//     a++;
//     console.log(a);
// }
btn1.addEventListener("click",()=>{
    console.log("Button Was Clicked - Handler1.");
});

btn1.addEventListener("click",()=>{
    console.log("Button Was Clicked - Handler2.");
});

const handle3=()=>{
    console.log("Button Was Clicked - Handler3.");
}

btn1.addEventListener("click",handle3);
 
btn1.addEventListener("click",()=>{
    console.log("Button Was Clicked - Handler4.");
});

btn1.removeEventListener("click",handle3);

// let box=document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("You are inside the Div");
// }