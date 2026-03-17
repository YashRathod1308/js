/*
Inheritance:-
    1. Inheritance is a mechanism in which one class acquires the properties and behaviors of another class.
    2. The class that inherits the properties and behaviors is called the child class or subclass.
    3. The class that is inherited from is called the parent class or superclass.

    Method Overriding:-
    1. Method overriding is a feature that allows a child class to provide a specific implementation of a method that is already defined in its parent class.
    2. The method in the child class should have the same name, return type, and parameters as the method in the parent class.

    Super Keyword:-
    1. The super keyword is used to call the constructor of the parent class and to access the properties and methods of the parent class.
    2. It is used in the child class to refer to the parent class.
    3. It can be used to call the parent class constructor, access parent class methods, and access parent class properties.

*/

class Parent{
    constructor(name){
        console.log("Parent class constructor...");
        this.name = name;
    }
    eat(){
        console.log("eating...");
    }
}
class Engineer extends Parent{
    
    constructor(name, branch){
        console.log("Engineer class constructor...");
        super(name); // calling parent class constructor
        this.branchName=branch;
    }
    work(){
        console.log("working...");
    }
}
class Doctor extends Parent{
    treat(){
        console.log("treating...");
    }
}

let eng = new Engineer();
console.log(eng.work());
console.log(eng.eat());

let doc = new Doctor();
console.log(doc.treat());
console.log(doc.eat());

let engObj=new Engineer("Yash", "Computer Science");
console.log(engObj.branchName);
console.log(engObj.name);

