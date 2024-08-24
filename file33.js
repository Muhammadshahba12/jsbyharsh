// (3:39:32- 3:43:26)
// "for of" loop in array

const fruits = ["apple","bnanana","grapes"];
// for(let fruit of fruits){
//     console.log(fruit);
//     // console.log(fruit.toUpperCase() );
// }


 const fruits2 = [];
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase() );
}
console.log(fruits2);