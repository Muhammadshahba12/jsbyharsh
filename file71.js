// (8:38:42- 8:51:58)
//  Methods (Function inside objects)

// const person = {
//     firstName: "M.Shahbaz",
//     age: 28,
//     about: function(){
//         console.log("My name is M.Shahbaz and age is 28");
//     }
// };
// // console.log(person.about);
// person.about();


// const person = {
//     firstName:"M.Shahbaz",
//     age:28,
//     about: function(){
//         console.log(`Person name is ${firstName} and age is ${age}`);
//     }
// };
// person.about();


// const person = {
//     firstName:"M.Shahbaz",
//     age:28,
//     about: function(){
//         console.log(`Person name is ${this.firstName} and age is ${this.age}`);
//     }
// };
// person.about();


// const person = {
//     firstName:"M.Shahbaz",
//     age:28,
//     about: function(){
//         console.log(this);
//     }
// };
// person.about();


// const person = {
//     firstName: "M.Shahbaz",
//     age: 28,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }
// };
// person.about();



function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}
const person1 = {
    firstName: "M.Shahbaz",
    age: 28,
    about: personInfo
};
const person2 = {
    firstName: "M.Danish",
    age: 31,
    about: personInfo
};
const person3 = {
    firstName:"M.Dawood",
    age:67,
    about: personInfo
};
personInfo();
console.log(personInfo);
person1.about();
person2.about();
person3.about();

