/*
    Sync in JavaScript:-
    1. Synchronous code is executed sequentially, meaning each line of code waits for the previous one to finish before executing.
    2. It can lead to blocking behavior, where the program becomes unresponsive if a long-running operation is encountered.
    3. Synchronous code is easier to read and understand, as it follows a straightforward flow.
    4. It is suitable for simple tasks that do not involve time-consuming operations or require user interaction.

    Asynchronous in JavaScript:-
    1. Asynchronous code allows multiple operations to run concurrently without blocking the main thread.
    2. It uses callbacks, promises, or async/await to handle operations that may take time to complete, such as network requests or file I/O.
    3. Asynchronous code can improve performance and responsiveness by allowing other tasks to continue while waiting for an operation to finish.
    4. It is essential for handling tasks that involve user interaction, such as event handling or animations, without freezing the user interface.

    setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It takes two parameters: the first is the function to be executed, and the second is the delay in milliseconds. For example:

    setTimeout(function() {
        console.log("This will be logged after 2 seconds");
    }, 2000);

    callback in javascript:-
    A callback is a function that is passed as an argument to another function and is executed after a certain event or operation has completed. 
    Callbacks are commonly used in asynchronous programming to handle the results of operations that may take time to complete, such as network requests or file I/O. 
    
    For example:
    function fetchData(callback) {
        // Simulating an asynchronous operation
        setTimeout(function() {
            // Simulated fetched data
            const data = "Fetched data";
            callback(data);
        }, 2000);
    }

    Callback hell in javascript:-
    
    
 */
console.log("One");
console.log("Two");

function hello() {
    console.log("This will be logged after 2 seconds");
}
setTimeout(hello, 2000);

console.log("Three");
console.log("Four");

// //Synchronous callback example:-
function sum(a,b){
    console.log("Sum Of Two Numbers:",a+b);
}
function calculate(a,b,sumCallback){
    sumCallback(a,b);
}
calculate(5,10,sum);

// //Asynchronous Callback Example:-
const hell=()=>{
    console.log("hello");
}
setTimeout(hell,2000);

//callback hell example:
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Data:",dataId);
//         resolve("success"); 
//         if(getNextData){
//             getNextData();
//         }
//     },5000);
//     });
    
// }
// getData(1,()=>{
//     getData(2,()=>{
//          getData(3);
//     });
// });
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
    console.log("I am promise");
    reject("Sorry some error occurred");
    // resolve("Success");
})
}
let promise=getPromise();
promise.then((res)=>{
    console.log("Fulfilled....",res);
});
promise.catch((err)=>{
    console.log("Rejected..",err);
})

// Promise Chaining Example

function asyncFunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data1");
            resolve("Success");
        },4000);
    })
}
function asyncFunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data2");
            resolve("Success");
        },4000);
    })
}

console.log("Fetching Data1...");

let p1=asyncFunction1();
p1.then((res)=>{
    console.log("result:",res);
    console.log("Fetching Data2...");
    let p2=asyncFunction2();
    p2.then((res)=>{
    console.log("result:",res);
});
});
