const URL="https://cataas.com/api/cats?tags=cute";
const factId=document.querySelector("#id");
const btn=document.querySelector("#btn");

const getTags=async ()=>{
    console.log("Getting Data...");
    let response= await fetch(URL);
    console.log(response);
    let data=await response.json();
    factId.innerText=data[0].id;
    // console.log(data);
}


btn.addEventListener("click",getTags);