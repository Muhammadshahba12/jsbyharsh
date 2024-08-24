// (4:11:08- 4:18:20)
// How to iterate in object 

let person = {
       fname:"Muhammad",
       lname:"Shahbaz",
       age:   29,
       school: "P.R High school",
       college : "Shalimar college",
       "uv level": "M.A.O College"
};
// let a  = "key";
// person[a] = "M.Shahbaz@gmail.com";
// person["gender"] = "Male";
// console.log(person);

// console.log(a,person[a]);



// "for in" loop
// object.keys()

// for(let key in person){
//     console.log(key);
// }

//                   Assignment #01
//  we want to print key's value
// problem:-
// for(let key in person){
//     console.log(person.key);
// }
// Solution:-
// for(let key in person){
//     console.log(person[key]);
// }


//                   Assignment #02
//  we want to print key && value pair
// // problem:- 
// for(let key in person){
//     console.log(person["key"] + ": " +person[key]);
// } 
// // Solution:-
// for(let key in person){
//     // it takes person[key] as key is defined key="name" && person["name"]
//     console.log(`${key}: ${person[key]}`);
//     // or
//     // console.log(key+": "+ person[key]);
// }

// object.keys()
// console.log(Object.keys(person) );
// console.log(typeof Object.keys(person) );
// let val = Object.keys( person );
// console.log(Array.isArray( val));

for(let key of Object.keys(person) ){
    console.log(key + ": " + person[key]);
}



// Ruff work
// for(let key in person){
//     console.log(key);
// }
// for(let j in person){
//     console.log(j+ ": "+ person[j]);
// }
// console.log(person["age"]);
