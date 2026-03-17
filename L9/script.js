/* 
    how to use of __proto__ in JavaScript?
    -  __proto__ is a property that exists on all JavaScript objects. It is used to access the prototype of an object, which is the object from which it inherits properties and methods.
    -  when object & prototype are use same method,object method is called first, if object method is not found then prototype method is called. This is called prototype chain.
*/

const emp={
    calcTax(){
        console.log("Tax is 10%"); 
    },
};

const karanArjun={
    salary:500000,
};
karanArjun.__proto__=emp; // karanArjun is inheriting the properties and methods of emp object
karanArjun.calcTax();