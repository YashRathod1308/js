// Arithmetic Operators
let a = 10;
let b = 5;  
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0        
console.log("Exponentiation:", a ** b); // 100000


// unary Operators

let c = 5;
let d = 2; // unary negation
console.log("Increment:",c++); // 5 (post-increment)
console.log(c);
console.log("Decrement:",--d); // 1 (pre-decrement)

// Assignment Operators

let e = 5;
let f = 2;
e += 1; // e = e + 1;
console.log("Addition Assignment:", e);// 6
f *= 3; // f = f * 3;
console.log("Multiplication Assignment:", f); // 6  
e -= 2; // e = e - 2;
console.log("Subtraction Assignment:", e); // 4
f /= 2; // f = f / 2;       
console.log("Division Assignment:", f); // 3
e %= 3; // e = e % 3;
console.log("Modulus Assignment:", e); // 1
e **= 2; // e = e ** 2;
console.log("Exponentiation Assignment:", e); // 1  

// Comparison Operators
let g = 10;
let h = 5;
console.log("Equal to:", g == h); // false when g is equal to h, it returns true otherwise it returns false check only value
console.log("Not equal to:", g != h); // true when g is not equal to h, it returns true otherwise it returns false check only value
console.log("Strict equal to:", g === h); // false when g is equal to h, it returns true otherwise it returns false check both value and type
console.log("Strict not equal to:", g !== h); // true when g is not equal to h, it returns true otherwise it returns false check both value and type
console.log("Greater than:", g > h); // true when g is greater than h, it returns true otherwise it returns false check both value and type
console.log("Less than:", g < h); // false when g is less than h, it returns true otherwise it returns false check both value and type
console.log("Greater than or equal to:", g >= h); // true when g is greater than or equal to h, it returns true otherwise it returns false check both value and type
console.log("Less than or equal to:", g <= h); // false  when g is less than or equal to h, it returns true otherwise it returns false check both value and type

// Logical Operators        
let i = true;
let j = false;
console.log("Logical AND:", i && j); // false when both i and j are true, it returns true otherwise it returns false check both value and type 
console.log("Logical OR:", i || j); // true when either i or j is true, it returns true otherwise it returns false check both value and type 
console.log("Logical NOT:", !i); // false when i is true, it returns false and when i is false, it returns true check both value and type

// Conditional Statement
 
let age = 19;
if (age >= 18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}

let num=67;
if(num%2==0){
    console.log(num,"is an even numbers");
}
else{
    console.log(num,"is an odd number");
}
 
// Ternary Operator
let marks = 85;
let result = (marks >= 50) ? "Pass" : "Fail";
console.log("Result:", result); // Pass

// Switch Statement
let day = 3;
switch (day) {
    case 1: 
        console.log("Monday");
        break;  
    case 2:
        console.log("Tuesday");
        break;  
    case 3:     
        console.log("Wednesday");       
        break;
    case 4:
        console.log("Thursday");        
        break;
    case 5:
        console.log("Friday");        
        break;
    case 6:
        console.log("Saturday");        
        break;  
    case 7:
        console.log("Sunday");        
        break;  
    default:
        console.log("Invalid day");
}

// Prompt and Alert
let number=prompt("Enter a number:");
if(number % 5 == 0){
    alert(number +" is a multiple of 5");   
}
else{
    alert(number +" is not a multiple of  5");
}

//Grades of students
let score=88;
if(score>=90  && score <= 100)
{
    console.log("Grade A");
}
else if(score>=70 && score<=89){
    console.log("Grade B");
}
else if(score>=60 && score<=69){
    console.log("Grade C");
}
else if(score>=50 && score<=59){
    console.log("Grade D");
}
else if(score>=0 && score<=49){
    console.log("Grade F");
}