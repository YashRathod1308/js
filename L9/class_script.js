/*
    class in JS:-
    1. class is a template for creating objects.
    2. Those objects have same properties and methods.
    3. class is a blueprint for creating objects.
    
    Constructor:-
    1. A constructor is a special method that is used to initialize objects.
    2. It is called when an object is created.
    3. It is used to set the initial values of the properties of the object.
    4. It is defined using the constructor keyword.
    5. It is called automatically when an object is created.

    new keyword:-
    1. The new keyword is used to create an instance of a class.
    2. It is used to create an object from a class.
    3. It is used to call the constructor of the class.
    
    Inheritance:-
    1. Inheritance is a mechanism in which one class acquires the properties and behaviors of another class.
    2. The class that inherits the properties and behaviors is called the child class or subclass.
    3. The class that is inherited from is called the parent class or superclass.
*/

class ToyotaCar{

    constructor(brand,model,year){
        console.log("constructor is created...");
        this.brandName=brand;
        this.modelName=model;
        this.year=year;
    }
    start(){
        console.log("Car is starting..."); 
    }
    stop(){
        console.log("Car is stopping...");
    }
}
let fortuner=new ToyotaCar("Fortuner","SUV",2020);
let innova=new ToyotaCar("Innova","SUV",2021);

console.log(fortuner);
console.log(innova);


