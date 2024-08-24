// (10:19:35- 10:26:42)

let numbers = [1,2,3];
// javascript ko ye methods prototype se ml rha hn
// numbers.
console.log(numbers);
// prototype ----> function/ constructor function
// (prototype only available in function)

// internally javaScript array ko "Array constructor"
// ke madadd se bnata ha like:-
let numbers11 = new Array(1,2,3);

// "new" keyword jo krta ha app ko pta ha
// sare methods Array ka prototype ma pre hn
let numbers1 = new Array(1,2,3);
console.log(Array.prototype);
// console.log(Object.getPrototypeOf(numbers) );
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …] ---> app iss
// ko dekh kr kah rhe ho gay ye tu "Array" ha. G ye array ha why? 
// Array is object in JavaScript


let numbers21 = [1,2,3];
console.log(Array.prototype);
console.log(Array.isArray(Array.prototype) );
// "Array" ka "prototype" actual ma "array" ha.

function hello(){
    console.log("Hello world!");
}
console.log(hello.prototype);


// prototype ke value ko hm change bhi kr skte hn
function hello(){
    console.log("Hello worrld!");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1');
console.log(hello.prototype);