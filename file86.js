// (10:26:44- 10:35:12)
//  2015 / es6
//  class keyword
//  class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    about(){
        return  `${this.firstName} ${this.lastName} is ${this.age} years old.`;
    }
    is18(){
        return this.age>18;
    }
    sing(){
        return "hwj kwljkh hwh";
    }
    func(a){
        console.log(a);
    }
}
const user1 = new CreateUser("M.","Ali","Ali@gmail.com",3,"lahore");
const user2 = new CreateUser("Hina","rahat","Hina@gmail.com",73,"karachi");
const user3 = new CreateUser("M.","Sami","sami@gmail.com",23,"Islamabad");
// Jase he hm log "new" keyword ke sath Object banay ge
// wase he "class CreateUser" ka "constructor" automatically 
// call(Invoke) ho jay ga 
console.log(user1.firstName,user1.lastName);
console.log(user1.sing() );
console.log(user1.is18() );
console.log(Object.getPrototypeOf(user1));
user1.func("M.Shahbaz");
user1.func(45);

