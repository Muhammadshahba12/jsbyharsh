// (7:39:25- 7:43:17)
//  some method( ek bhi number esa jo even hai answer "true" ho ga)

// const numbers = [3,5,8,11];
// const ans = numbers.some( num => num%2===0);
// console.log(ans);


// const numbers = [3,5,9,11];
// const ans = numbers.some( num => num%2===0);
// console.log(ans);


//              Assignment
// check product is less than 30k.
const userCart = [
    { productId:1, productName:"mobile", price:120000},
    { productId:2, productName:"laptop", price:22000},
    { productId:3, productName:"tv", price:15000},
    { productId:4, productName:"laptop", price:5000},
    { productId:5, productName:"tv", price:75000}
];
const ans = userCart.some( user=> user.price > 100000);
console.log(ans);