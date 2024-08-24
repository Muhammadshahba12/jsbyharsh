// (3:43:28- 3:46:46)
// "for in" loop in Array

const fruits = ["apple","banana","mango"];

// for(let i in fruits){
//     console.log(i);
// }

const fruits2 =[];
for(let i in fruits){
    fruits2.push(fruits[i].toUpperCase() );
}
console.log(fruits2);

