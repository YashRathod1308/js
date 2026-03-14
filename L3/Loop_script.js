// Loop is a programming structure that repeats a sequence of instructions until a specific condition is met. It allows you to execute a block of code multiple times without having to write it out repeatedly. There are different types of loops in programming, including:

// 1. For Loop: A for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement. The loop continues to execute as long as the condition is true.
for (let i =1;i<=5;i++){
    console.log("For Loop:",i);
}
// sum of 5 numbers using for loop
let sum=0;
for(let i=1;i<=5;i++){
    sum = sum+i;
}
console.log("Sum of 5 numbers using for loop:",sum);

// 2. While Loop: A while loop is used when the number of iterations is not known beforehand. It continues to execute as long as the specified condition is true.
let j=1;
while(j<=5){
    console.log("While Loop:",j);
    j++;
} 
// do while loop: A do-while loop is similar to a while loop, but it guarantees that the block of code will be executed at least once, as the condition is checked after the code block is executed.
let k=1;
do{
    console.log("Do while Loop:",k);
    k++;
} while(k<=5);

/* for of loop: A for-of loop is used to iterate over the elements of an iterable object, such as an array or a string. It allows you to access each element directly without needing to use an index. 
Syntax: for (variable of iterable) 
        { 
            // code to be executed 
        }
*/
let str="YashRathod";
let size=0;
for(let i of str){
    console.log("For Of Loop:",i);
    size++;
}
console.log("Size of Character:",size);

/* for in loop: A for-in loop is used to iterate over the properties of an object. It allows you to access each property name (key) of the object.
Syntax: for (variable in object) 
        { 
            // code to be executed  
        }
*/

let student={
    name:"Yash",
    age:20,
    cgpa:9.5,
    isPass:true
};
for (let i in student){
    console.log("For in Loop:",i,":",student[i]);
}
// print all 0 to 100 even numbers using any loop
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("Even numbers from 0 to 100=",i);
    }
}

// create a game when user guesse a number until user guess the correct number using any loop and prompt and alert
let gameNumber=7;
let userNumber=prompt("Guess a the game number:");

while(userNumber!=gameNumber){
    alert("Wrong guess! Try again.");
    userNumber=prompt("Guess a the game number:");
}
console.log ("Congratulations! You guessed the correct number.");