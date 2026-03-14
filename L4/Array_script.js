// Array is a data structure that can hold multiple values at once. It is a collection of items stored at contiguous memory locations. Each item in an array is called an element, and each element can be accessed using its index.
// In JavaScript, arrays are dynamic, meaning they can grow and shrink in size as needed. They can hold any type of data, including numbers, strings, objects, and even other arrays.
// Creating an array
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(fruits.length); // Output: 3
// Accessing elements
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log("fruits[2]:",fruits[2]='Mango');


// looping through an array: what if we want to access all the elements in an array? We can use a loop to iterate through the array and access each element. The most common way to loop through an array is to use a for loop.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//print student marks in array and find the average marks
let stuMarks=[85,97,44,37,76,60];
let totalMarks=0;
for (let val of stuMarks) {
    totalMarks=totalMarks+val;
}
console.log("Total marks:",totalMarks);
let avg=totalMarks/stuMarks.length;
console.log("Average marks:",avg);

// practice 2
let price=[250,645,300,900,50];
let idx=0;
for(let val of price){
    let offer= val/10;
    price[idx]=price[idx]-offer;
    console.log(`price after discount at index ${idx} is ${price[idx]}`);
    idx++;
}

// Arrays Methods
// 1. push():- method is used to add one or more elements to the end of an array and returns the new length of the array.
let colors=['red','green','blue'];
colors.push('yellow');
console.log(colors); // Output: ['red', 'green', 'blue', 'yellow']
// 2. pop():- method is used to remove the last element from an array and returns that element. This method changes the length of the array.
let lastColor=colors.pop();
console.log(lastColor); // Output: 'yellow'
console.log(colors); // Output: ['red', 'green', 'blue']
// 3. shift():- method is used to remove the first element from an array and returns that element. This method changes the length of the array.
let firstColor=colors.shift();  
console.log(firstColor); // Output: 'red'
console.log(colors); // Output: ['green', 'blue']
// 4. unshift():- method is used to add one or more elements to the beginning of an array and returns the new length of the array.
colors.unshift('purple');
console.log(colors); // Output: ['purple', 'green', 'blue']
// 5. toString():- method is used to convert an array to a string and returns the resulting string. The elements of the array are separated by commas in the resulting string.
let colorString=colors.toString();
console.log(colorString); // Output: 'green,blue'
// 6. join():- method is used to join all elements of an array into a string and returns the resulting string. You can specify a separator to be used between the elements in the resulting string.
let colorJoined=colors.join(' - ');
console.log(colorJoined); // Output: 'green - blue'
// 7. indexOf():- method is used to find the index of the first occurrence of a specified element in an array. It returns -1 if the element is not found.
let index=colors.indexOf('blue');
console.log(index); // Output: 1
// 8. includes():- method is used to determine whether an array includes a certain element, returning true or false as appropriate.
let hasGreen=colors.includes('green');
console.log(hasGreen); // Output: true
let hasYellow=colors.includes('yellow');
console.log(hasYellow); // Output: false    
// 9. slice():- method is used to extract a portion of an array and returns a new array. The original array remains unchanged.
let slicedColors=colors.slice(0,1);
console.log(slicedColors);
// 10. splice():- method is used to add or remove elements from an array. It changes the original array and returns an array containing the removed elements.
let removedColors=colors.splice(1,1,'orange','pink');
console.log(removedColors);
// 11. concat():- method is used to merge two or more arrays and returns a new array. The original arrays remain unchanged.
let moreColors=['purple','orange'];
let allColors=colors.concat(moreColors);
console.log(allColors);


// practice 

let companines=['Blommeberg','Microsoft','uber','Google','IBM','Netix'];
// 1. Remove the First Company from the array and print the updated array.
let removeFirstComany=companines.shift();
console.log("Removed First Company:",removeFirstComany);
console.log(companines);
//2.Remove uber and add ola in its place
let  removerUber=companines.splice(1,1,'Ola');
console.log("Removed Uber:",removerUber);
console.log(companines);
//3. Add Amazon at the end
let addAmazon=companines.push('Amazon');
console.log("Added Amazon:",addAmazon);
console.log(companines);