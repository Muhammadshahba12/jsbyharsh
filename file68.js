// (8:11:13- 8:29:09)
//  Maps
// map is iterable

// store data in ordered fashion

// store key value pairs (Like object)
// duplicate keys are not allowed Like objects

// diffeent between maps and objects

// objects can only have string or symbol
// as key

//  in maps you can use aything as key
//  Like array, number, string

// Object literal
// key --> string
// key --> symbol
// const person = {
//     firstName: "M.Shahbaz",
//     age: 25
// };
// console.log(person.firstName);
// console.log(person["firstName"]);


// const person1 = {
//     firstName: "M.Shahbaz",
//     age: 25,
//     1: "one"
// };
// console.log(person1);
// // console.log(person['1']);
// console.log(person[1]);
// for(let key in person){
//     // console.log(key);
//     console.log(typeof key);
// }


// const person = new Map();
// console.log(person);
// person.set('firstName','M.Shahbaz');
// person.set('age',25);
// person.set(1,'one');

//         //   array as key
// person.set([1,2,3],'oneTwoThree');
// console.log(person.get([1,2,3]));
//         //   object as key
// person.set({1:'one'},'oneTwoThree');

// console.log(person);
// console.log(person.firstName);
// console.log(person['firstName']);

// console.log(person.get('firstName'));
// console.log(person.get('age'));
// console.log(person.get(1));

// console.log(person.keys());
// // for(let key of person.keys()){
// //     console.log(key);
// // }
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let key of person){
//     console.log(key);
// }

// for(let key of person){
//     console.log(typeof key);
// }

// for(let key of person){
//     console.log( Array.isArray(key));
// }


// for(let key,value of person){
//     console.log( key, value);
// }


// for(let [key,value] of person){
//     console.log( key, value);
// }

// const person = new Map([['firstName','harshit'],['age',7]]);
// console.log(person);


// const person1 = {
//     id:1,
//     firstName:"harshit"
// };
// const userInfo = new Map();
// userInfo.set(person1, {age:8, gender:"male"});
// console.log(userInfo);
// console.log(person1.id);
// console.log(userInfo.get(person1));
// console.log(userInfo.get(person1).age);



const person1 = {
    id:1,
    firstName: "harshit"
};

const person2 = {
    id:2,
    firstName:"hars"
};
const extraInfo = new Map();
extraInfo.set(person1,{age:8, gender:"male"});
extraInfo.set(person2,{age:9, gender:"female"});
    console.log(person1);
    console.log(person2);
    console.log(extraInfo.get(person1));
    console.log(extraInfo.get(person2));
    console.log(extraInfo.get(person1).age);
    console.log(extraInfo.get(person1).gender);
    console.log(extraInfo.get(person2).age);
    console.log(extraInfo.get(person2).gender);