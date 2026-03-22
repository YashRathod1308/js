function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Wheter Data");
            resolve(200);
        },2000);
    });
}
async function getWheatherData(){
    await api();
    await api(); 
}
// console.log(getWheatherData());

function getData(dataId){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Data:",dataId);
        resolve("success"); 
    },2000);
    });
}
async function getAllData(){
    console.log("getting Data1.....");
    await getData(1);
    console.log("getting Data2.....");
    await getData(2);
}
console.log(getAllData());  