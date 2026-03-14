// String: A string is a sequence of characters enclosed in single or double quotes.
let name="Yash Rathod";
console.log("Name:",name); 
let size=name.length;
console.log("Length of String:",size);

//string Indices: String indices are zero-based, meaning the first character of a string is at index 0, the second character is at index 1, and so on.
console.log("First character:",name[0]); 
console.log("Last character:",name[name.length-1]);

//Templeate Literals: Template literals are enclosed in backticks (`) and allow for embedding expressions using ${expression}.
// string interpolation: Template literals provide a convenient way to perform string interpolation, which is the process of embedding expressions within a string. This allows you to create dynamic strings that can include variables, function calls, or any valid JavaScript expression.
let obj={
    name:"Yash",
    age:20
};
let templateString=`My name is ${obj.name} and I am ${obj.age} years old.`;
console.log("Template String:",templateString); 

console.log(typeof templateString); 
// String Methods: JavaScript provides various built-in methods for manipulating strings. Some commonly used string methods include:

// 1. toUpperCase(): Converts a string to uppercase.
let upperCaseString=name.toUpperCase();
console.log("UpperCase String:",upperCaseString);
// 2. toLowerCase(): Converts a string to lowercase.
let lowerCaseString=name.toLowerCase();
console.log("LowerCase String:",lowerCaseString);  
// 3. indexOf(): Returns the index of the first occurrence of a specified value in a string.
let index=name.indexOf("Rathod");  
console.log("Index of 'Rathod':",index);
// 4. slice(): Extracts a section of a string and returns it as a new string.
let slicedString=name.slice(0,4); 
console.log("Sliced String:",slicedString); 
// 5. replace(): Replaces a specified value with another value in a string.
let replacedString=name.replace("Yash","Rahul");
console.log("Replaced String:",replacedString); 
// 6. split(): Splits a string into an array of substrings based on a specified separator.
let splitString=name.split(" ");
console.log("Split String:",splitString);
// 7. trim(): Removes whitespace from both ends of a string.
let stringWithWhitespace="   Hello World!   ";
let trimmedString=stringWithWhitespace.trim();
console.log("Trimmed String:",trimmedString);


//prompt to user to enter full name .generate a username based on the inputs.starting with @,follwed by full name and ending with length of full name.
let fullName=prompt("Enter Your Full Name:");
let userName=`@${fullName}${fullName.length}`;
console.log("Generated UserName:",userName);