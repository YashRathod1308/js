const URL="https://api.frankfurter.app/latest?";

const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");

for(let select of dropdown){
    for(cuurCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=cuurCode;
        newOption.value=cuurCode ;
        
        if(select.name === "from" && cuurCode === "USD")
        {
            newOption.selected ="selected";
        }
        else if(select.name === "to" && cuurCode === "INR")
        {
            newOption.selected ="selected";
        }
        select.append(newOption);
       
    }
    select.addEventListener("change",(evt)=>{
        updateFlags(evt.target);
    });
}

const updateFlags=(element)=>{
    let cuurCode=element.value;
    let countryCode=countryList[cuurCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
};

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amVal=amount.value;
  
    if(amVal == "" ||amVal<1){
        amVal=1;
        amount.value="1";
    }
const url= `${URL}/${fromCurr}/${toCurr}`;
})