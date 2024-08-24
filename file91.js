// (11:02:48 - 11:02:)


// class person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     eat(){
//         return `${this.firstName} is eating.`;
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const person1 = new person("M.","Shahbaz",28);
// console.log(person1.eat());

// All methods are related to instance/object
// mtlab ka hum log inn methods ko srf object bna kr he call kr sakte hn


// ma aesa Methods bhi bna sakta hn jo directly iss
// class se related hn ga... jn ko call krne ka lya 
// mujha object bnane ke zaroorat nhi ha
// ma directly class pa unha call kr sakta hn.

class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }
    // static method
    static classInfo(){
        return `this is person class`;
    }
    // static property
    static desc = "static property";

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating.`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}
const person1 = new person("M.","Shahbaz",28);
// console.log(person1.classInfo()); // Accessing static method with object "shohw Error".
console.log(person.classInfo());
console.log(person.desc);
console.log(person1.desc);// Accessing static property with object "shohw Error".

// static(): use
// app ko hm initialize/run krna ka lya ak class bna leta hn
// iss se hme help mlte ha app k run krne ka lya.