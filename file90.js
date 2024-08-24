// (10:49:35- 11:01:48)
// getter & setter

// class person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new person("M.","Shahbaz",28);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.fullName);

// ma chata hn ka "fullName" method ko ma 
// property "person1.firstName" ke tarha access
// kr saku "person1.fullName"  



// solution: use "get"
// class person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new person("M.","Shahbaz",28);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.fullName);



// class person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     setName(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const person1 = new person("M.","Shahbaz",28);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullName);
// person1.setName("M.","Danish");
// // or
// // person1.firstName = "M.";
// // person1.lastName = "Danish";

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullName);



class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new person("M.","Shahbaz",28);
person1.fullName = "Abdul Sami";
console.log(person1.fullName);
