/*
    Error-Handling.js:-

    Error handling in JavaScript is done using try...catch...finally blocks. 
    The try block contains code that may throw an error, the catch block handles the error if it occurs, and the finally block contains code that will execute regardless of whether an error occurred or not.
*/

let a=5;
let b=10;
console.log("The sum of a and b is:", a+b);
console.log("The sum of a and b is:", a+c); // This will throw an error because 'c' is not defined.
try{
    console.log("The sum of a and b is:", a+c); // This will throw an error because 'c' is not defined.
}
catch(error){
    console.log("An error occurred:", error.message);
}
finally{
    console.log("This will execute regardless of whether an error occurred or not.");
}