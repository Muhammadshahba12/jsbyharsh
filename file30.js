// (3:26:12 - 3:32:42)
// for loop in Arrray
let fruits = ["apple","mango","grapes","banana"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i);
// }
// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i].toUpperCase() );
// }

let fruits2 = [];
for(let i=0; i<fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

