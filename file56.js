// (6:18:47- 6:35:44)
// Important Array methods

// forEach
// map
// filter
// reduce

// const numbers = [2,5,9,12];
// function mutiplyBy2(number, index){
//     console.log(`index is`,index);
//     console.log(`${number}*2 = ${number *2}`);
// }
// mutiplyBy2(numbers[0], 0);


// const numbers = [1,3,6,8];
// function mutiplyBy2(number, index){
//     console.log("indexxxx is", index);
//     console.log(`${number}*2 = ${number*2}`);
// }
// mutiplyBy2(numbers[0], 0);
// mutiplyBy2(numbers[1], 1);
// mutiplyBy2(numbers[2], 2);
// mutiplyBy2(numbers[3], 3);


// const numbers = [2,4,6,9];
// function mutiplyBy2(number, index){
//     console.log("indexxxx is", index);
//     console.log(`${number}*2 = ${number*2}`);
// }
// for(let i = 0; i < numbers.length; i++ ){
//     mutiplyBy2(numbers[i], i);
// }



// const numbers = [2,4,6,9];
// function mutiplyBy2(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }
// for(let i = 0; i < numbers.length; i++ ){
//     mutiplyBy2(numbers[i], i);
// }


// const numbers = [2,4,6,9];
// function mutiplyBy2(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }
// numbers.forEach(mutiplyBy2);


//  const numbers = [2,44,6,9];
// numbers.forEach(function (number, index){
//     console.log(`index is ${index} number is ${number}`);

// }); 


// const numbers = [2,44,6,9];
// numbers.forEach(function(number){
//     console.log(`${number}*2 = ${number*2}`);
// });


// const numbers = [2,44,6,9];
// numbers.forEach(function(number, index){
//     console.log(`${number}*3 = ${number*3}, index is ${index}`);
// });



// const users = [
//     { firstName:"M.Ali", age:23},
//     { firstName:"M.Sami", age:24},
//     { firstName:"M.Shahbaz", age:35},
//     { firstName:"M.Danish", age:55},
//     { firstName:"M.Dawood", age:12}
// ];
// users.forEach( function(user){
//     console.log(user.firstName);
// });

// users.forEach((user)=>{
//     console.log(user.firstName);
// });


// users.forEach( function(user, index){
//     console.log(user.firstName, index);
// });

// for(let user of users){
//     console.log(user.firstName);
// }



const numbers = [3,43,787];
numbers.forEach( function(number){
    console.log(`your number is ${number}`);
});






//  Ruff work
const num1 = [2,4,6,8,10];
// num1.forEach((number,index)=>{
//     console.log(`Number is ${number} && index is ${index}`);
// });



// num1.map((number, index)=>{
//     console.log(`Number is ${number} && index is ${index}`);
// });



// const myFunc = function(number, index){
//     return `Number is ${number} && Index is ${index}`;
// };
// const my = num1.map(myFunc);
// console.log(my);



// const myFunc = num1.map(function(number, index){
//     return `Number is ${number} && index is ${index}`;
// });
// console.log(myFunc);



// const square = num1.map( (number)=>{
//     console.log(number*number);
// }); 
// square();
// console.log(square);



// const square = num1.map(function(number){
//     return number*number;
// });
// console.log(square);