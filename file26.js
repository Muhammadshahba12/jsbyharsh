// (2:41:56 - 2:52:04)
// intro to arrays
// reference type
// how to create array

// ordered collection of items

// let fruits = ["apple", "apricot", "mango"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = [1,2,2,3, "string", null, undefined];

// console.log(fruits[1]);
// console.log(numbers[4]);
// console.log(mixed[4]);

let fruits = ["apple", "apricot", "mango"];
let obj = {};
fruits[1] = "grapes";
console.log(fruits);

console.log(typeof obj);
console.log(typeof fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

