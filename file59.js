// (6:47:55- 7:04:33)
//  Reduce

const numbers = [1,2,3,4,5,10];

// aim: sum of all Numbers in Array
// const sum = numbers.reduce( (accumulator, currentValue)=>{
//      return accumulator+currentValue;
// });
// console.log(sum);
// how it works
// accum.      currentValue   return
//  1           2               3
//  3           3               6
//  6           4               10
//  10          5               15
//  15          10              25


// const sum = numbers.reduce((accumulator, currentValue)=>{
//       return accumulator + currentValue;
// }, 100);
// console.log(sum);



const userCart = [
    { productId:1, productName:"mobile", price:12000},
    { productId:2, productName:"laptop", price:22000},
    { productId:3, productName:"tv", price:15000}
];

const sum = userCart.reduce( (totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0);
console.log(sum);
// totalPrice     currentValue     return
//  0               12,000          12,000
// 12,000           22,000          34,000
// 34,000           15,000          49,000




//  Short Notes( forEach, map, filter, reduce)

// const numbers = [1,2,3,4,5,10];
// numbers.forEach((number)=>{
//     console.log(number*number);
// });

// const isEven = numbers.map( (number)=>{
//     return number*number;
// });
// console.log(isEven);


// const elegible = numbers.filter( (number)=>{
//     return number<5;
// });
// console.log(elegible);


// const userCart = [
//     { productId:1, productName:"mobile", price:12000},
//     { productId:2, productName:"laptop", price:22000},
//     { productId:3, productName:"tv", price:15000}
// ];
// const f = userCart.filter((number)=>{
//     return number.price>10000;
// });
// console.log(f);



// const sum = numbers.reduce( (total, currentVaue)=>{
//     return total+currentVaue;
// });
// console.log(sum);