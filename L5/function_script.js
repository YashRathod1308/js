/*Function in JavaScript: function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it).
In function Parentheses is used to pass parameters to the function. 
 function advantages 
 1. Reusability: Functions allow you to reuse code, which can save time and reduce errors.
 2. Modularity: Functions help break down complex problems into smaller, more manageable pieces.
 3. Readability: Functions can make code easier to read and understand by giving meaningful names to blocks of code.
 4. Maintainability: Functions can make it easier to maintain and update code, as changes can be made in one place rather than throughout the entire codebase.
 5. Abstraction: Functions can help abstract away complex logic, allowing you to focus on the higher-level structure of your code.
 6. redundancy: Functions can help reduce redundancy in code by allowing you to reuse code instead of writing it multiple times.
*/

// Function Declaration

function greet(msg) {
    console.log(msg);
}
greet("Yash Rathod"); // Output: Yash Rathod

// Function Sum
function sum(a, b) {
    console.log(a + b);
}
sum(10, 5); // Output: 15

// Arrow Function : Arrow functions are a more concise syntax for writing function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a shorter syntax for defining functions. Arrow functions are often used for simple, one-line functions or as callbacks.
// Arrow Function Syntax: (parameters) => { function body }

// Example of Arrow Function

function sum(a, b) {
    return a + b;
}
const arrowSum = (a, b) => {
    console.log(a + b);
}
arrowSum(10, 5); // Output: 15

function mul(a, b) {
    return a * b;
}
const arrowMul = (a, b) => {
    console.log(a * b);
}
arrowMul(10, 5); // Output: 50

// create a function take string and return the vowels in the string.
function countVowel(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }
    let val = count;
    console.log(val);
}
countVowel("Yash Rathod"); // Output: 3

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }
    let val = count;
    console.log(val);
}
countVow("AyushRathod"); // Output: 4

// forEach loop in Array: The forEach() method in JavaScript is used to execute a provided function once for each array element. It is a built-in method of the Array prototype and is commonly used for iterating over arrays.
// callback function: A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to handle asynchronous operations or customize the behavior of a function.
// This is Important in Interview:" A high-order function is a function that takes one or more functions as arguments, returns a function as its result, or both. High-order functions are a fundamental concept in functional programming and are widely used in JavaScript. "
let arr = [1, 2, 3, 4, 5];
arr.forEach((val, idx) => {
    console.log(val, "Index of", idx);
});

// given array and print the square of each element in the array using forEach.
// using  forEach loop
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(val => {
    console.log(val * val);
});
//using for loop
for(let i=0;i<=10;i++){
    s=i*i;
    console.log(s);
}

// Array Methods: Array methods are built-in functions that allow you to perform various operations on arrays in JavaScript. These methods can be used to manipulate, transform, and analyze arrays in different ways. Some common array methods include:
//1. map(): The map() method creates a new array by applying a provided function to each element of the original array.
let num=[1, 2, 3, 4, 5];
let newArr=num.map(val=>{
    return val;
})
console.log(newArr); // Output: [1, 2, 3, 4, 5]

//2. filter(): The filter() method creates a new array with all elements that pass the test implemented by the provided function.   
let newFilter=num.filter((val)=>{
    return val%2==0;
})
console.log(newFilter); // Output: [2, 4]

//3. reduce(): The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
const output=num.reduce((res,curr)=>{
    return res>curr ? res : curr;
})
console.log(output); // Output: 5

// practice 1: given array of student marks .filter out the marks of student that scored 90+.
let marks=[80, 90, 95, 96   , 70];
let score=marks.filter((val)=>{
    return val>=90;
})
console.log(score);

// practice 2:take a n number from user.create an array of numbers  from 1 to n. 
// use reduce method to calculate sum of all numbers in the array.
// use reduce method to calculate product of all numbers in the array.

let n=prompt("Enter a N number:");
let arrNum=[];
for(let i=1;i<=n;i++){
    arrNum.push(i);
}
console.log("New Array:",arrNum);

let sumNum=arrNum.reduce((res,curr)=>{
    return res+curr;
})
console.log(sumNum);
let product=arrNum.reduce((res,curr)=>{
    return res*curr;
} ) 
console.log(product);