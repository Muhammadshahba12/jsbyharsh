// (2:52:05 - 3:00:01)
// Array are mutable it's mean any method 
//     you apply will effect original array.
// array push pop
// array shift unshift


// push()  => Add element at end
// let fruits = ["apple"];
// console.log(fruits);
// fruits.push("mango");
// fruits.push("grapes");
// fruits.push("banana");
// console.log(fruits);


// pop()  => Remove element from end
// let fruits = ["apple", "mango", "banana", "grapes"];
// console.log(fruits);
// let p1 = fruits.pop();
// console.log("1st Pop element from array is",p1);
// console.log(fruits);
// let p2 = fruits.pop();
// console.log("2nd pop elementfrom array is", p2); 
// console.log(fruits);


// unshift()  => Add element at start
// let fruits = ["apple"];
// console.log(fruits);
// fruits.unshift("mango");
// fruits.unshift("peach");
// fruits.unshift("banana");
// fruits.unshift("grapes");
// console.log(fruits);


// shift()  => Remove element from start
let fruits = ["apple", "mango", "banana", "peach", "grapes"];
console.log(fruits);
let s1 = fruits.shift();
console.log("1st shift element from array", s1);
let s2 = fruits.shift();
console.log("2nd shift element from array", s2);
console.log(fruits);