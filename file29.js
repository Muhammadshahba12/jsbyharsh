// (3:16:30 - 3:26:11)
// How to clone array

// How to concatenate two arrays


// 1st Method:-
// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"]; 
// ...
// console.log("Array1 elements are: ", array1);
// console.log("Array2 elements are: ", array2);
// console.log( array1===array2 );
// console.log("After pushing element into Array1: ");
// array1.push("item3");
// array1.push("item4");
// console.log("Array1 elements are: ", array1);
// console.log("Array2 elements are: ", array2);
// console.log( array1===array2 );


// 2nd Method:-
// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);
// ....
// array1.push("item3");
// // let array2 = array1.slice(0);
// console.log(array1);
// console.log(array2);
// console.log(array1 === array2);



// 3rd Method:-
// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);
// ...
// console.log(array1);
// console.log(array2);
// array1.push("item3");
// array1.push("item4");
// console.log("After pushing elements into Array1:- ")
// console.log(array1);
// console.log(array2);

// 4th Method:-
// Spread operator
// let array1 = ["item1", "item2"];
// let array2 = [...array1];
// ...
// console.log(array1);
// console.log(array2);
// console.log( array1===array2);
// array1.push("item3");
// console.log("After pushing elements are:- ");
// console.log(array1);
// console.log(array2);
// console.log( array1===array2 );


//  Assignment:- 01
// create Array1 which contain all elements
//       of Array2 and also extra elements.
let array1 = ["item1", "item2"];
//     1st Method:-
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = array1.slice(0).concat("item3", "item4");

//     2nd Method:-
// let array2 = [].concat(array1,["item3", "item4"]);
// let array2 = [].concat(array1,"item3", "item4");

//     3rd Method:-
let array2 = [...array1,"item3", "item4"];
// let array2 = [...array1].concat("item3", "item4");
// let array2 = [...array1].concat(["item3", "item4"]);

console.log(array1);
console.log(array2);

// let array1 = ["item1", "item2"];
// let array3 = ["item5", "item6"];
// let array2 = [...array1,...array3,"item3", "item4"];
// console.log(array2);
