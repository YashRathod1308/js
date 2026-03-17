/*
    
*/

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Name:",this.name, "Email:",this.email);
    }
}
class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        console.log("Name:",this.name,"Or Email:",this.email,"is editing data.");
        console.log("Data edited successfully.");
    }
}
let user1 = new User("Yash Rathod","yash@gmail.com");
let user2 = new User("John Doe","john@gmail.com");
let view1=user1.viewData();
let view2=user2.viewData();
console.log(view1);
console.log(view2);

let admin1 = new Admin("Admin Yash","admin-yash@gmail.com");
console.log(admin1.viewData());
console.log(admin1.editData());
