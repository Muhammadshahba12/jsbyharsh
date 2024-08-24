// (3:56:46- 4:06:03)
// Objects (objects is reference type)
// Array are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

//  how to create objects
// const person = { name:"M.Shahbaz", age:29};
const person ={
    name: "M.Shahbaz",
    age:  29,
    hobbies: ["Namaz","Quran-Pak","Durood-sreef","Zikar"]
};
console.log(person);

// how to access data from objects
console.log(person["age"]);
console.log(person["name"]);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// how to add key value pair to objects
person["gender"] = "male";
// person.male = "Male";
console.log(person);


// Ruff work
// let obj = {
//     fname: "Muhammad",
//     lname: "Shahbaz",
//     age: 29,
//     hobbies: ["Namaz","Quran-pak","Durood-shareef","Zikar"]
// };
// obj.lname = "Danish";
// obj["age"] = 32;
// obj.school = "P.R high school";
// console.log(obj);
// console.log(obj.fname);
// console.log(obj["lname"]);
// console.log(obj.school);
// console.log(obj["age"]);