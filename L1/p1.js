f1="yash";
console.log(f1);

let age=20;

const student={
    name:"yash",        
    age:20,
    city:"pune",
    isPass:true 
}
console.log(student);

/*Output
how to access the value of an object
    student["name"] 
    obj.key
    student.name 
    student.isPass
*/
student["age"]=student["age"]+5; //update the value of age
console.log(student["age"]);

console.log(student.name); //accessing the value of name using dot notation
