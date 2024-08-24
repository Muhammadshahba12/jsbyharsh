// (5:53:43- 5:56:18)
// Default parameter

// function addTwo(a, b){
//     return a+b;
// }
// const a1 = addTwo(2, 3);
// console.log(a1);
// console.log( addTwo(5, 7) );


// function addTwo(a, b){
//     if(typeof b==="undefined"){
//         b=1;
//     }
//     return a+b;
// }
// const a1 = addTwo(5);
// console.log(a1);


function addTwo(a, b=0){
    return a+b;
}
const a1 = addTwo(5);
console.log(a1);
console.log( addTwo(5, 7) );