// (7:33:03- 7:39:24)
//  every method

// const num1 = [2,4,6,8,10];
// const ans = num1.every( num=> num%2===0);
// console.log(ans);


// const num1 = [1,2,4,6];
// const ans = num1.every( num=> num%2===0);
// console.log(ans);

// callback function ---> true / false(boolean)
// every method ---> true / false 

// const num1 = [2,4,6];
// //  const isEven = function(number){
// const isEven = (number)=>{
//     return number%2===0;
// }
// const ans = num1.every(isEven);
// console.log(ans);


//              Assignment
// check every product is less than 30k.
const userCart = [
    { productId:1, productName:"mobile", price:12000},
    { productId:2, productName:"laptop", price:22000},
    { productId:3, productName:"tv", price:15000},
    { productId:4, productName:"laptop", price:5000},
    { productId:5, productName:"tv", price:75000}
];

const ans = userCart.every( user=> user.price < 30000);
console.log(ans);