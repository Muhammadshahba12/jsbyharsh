// (3:37:46 - 3:39:30)
// while loop in Array

const fruits = ["apple","banana","grapes"];
const fruits2 = [];
let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase() );
    i++;
}
console.log(fruits);
console.log(fruits2);