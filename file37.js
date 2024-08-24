// (4:06:04- 4:11:07)
// Difference b/w Dot && Bracket Notation

// Problem:- 
// let person = {
//     name: "M.Shahbaz",
//     age: 29,
//     person hobbies: ["Namaz","Quran-pak","Durod-shareef","Zikar"]
//  };

// Solve with Dot Notation
let person = {
   name: "M.Shahbaz",
   age: 29,
   "person hobbies": ["Namaz","Quran-pak","Durod-shareef","Zikar"]
};
console.log(person);
// console.log(person.person hobbies ); //error
console.log(person["person hobbies"][1] );

// Output needed (04:31:49)
// { email: 'MuhammadShahbaz9009@gmail.com'};
const key = "email";
// person.key  = "MuhammadShahbaz9009@gmail.com";
// person["key"] = "MuhammadShahbaz9009@gmail.com";
person[key] = "MuhammadShahbaz9009@gmail.com";
person["gender"] = "Male";
console.log(person);





// Ruff work
// let obj = {
//    fname:"Muhammad",
//    lname:"Shahbaz",
//    age:   29,
//    school: "P.R High school",
//    college : "Shalimar college",
//    "uv level": "M.A.O College"
// };

// obj.gender = "Male";
// obj["personal hobbies"] = ["Namaz","Quran pak","Durood shareef","Zikar","Ikhlaq"];

// console.log(obj);
// console.log(`${obj.fname} ${obj.lname}`);
// console.log(obj["personal hobbies"]);
// console.log(obj["fname"]);