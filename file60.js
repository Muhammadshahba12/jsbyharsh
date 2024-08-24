// (7:04:35- 7:26:30)

// sort method (it will change our original string)
// ASCII TABLE
// char : ascii value

//  '0' : 48
//  '1' : 49
//  '2' : 50
//  '3' : 51
//  '4' : 52
//  '5' : 53
//  '6' : 54
//  '7' : 55
//  '8' : 56
//  '9' : 57

//  ':' : 58
//  ';' : 59
//  '<' : 60
//  '=' : 61
//  '>' : 62
//  '?' : 63
//  '@' : 64



//  'A' : 65
//  'B' : 66
//  'C' : 67
//  'D' : 68
//  'E' : 69
//  'F' : 70
//  'G' : 71
//  'H' : 72
//  'I' : 73
//  'J' : 74
//  'K' : 75
//  'L' : 76
//  'M' : 77
//  'N' : 78
//  'O' : 79
//  'P' : 80
//  'Q' : 81
//  'R' : 82
//  'S' : 83
//  'T' : 84
//  'U' : 85
//  'V' : 86
//  'W' : 87
//  'X' : 88
//  'Y' : 89
//  'Z' : 90

//  '[' : 91
//  '|' : 92
//  ']' : 93
//  '^' : 94
//  '_' : 95
//  ' ' ': 96


// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '/' : 124
// '}' : 125


//  sort

// //  5, 9, 1200, 400, 3000
// //  5, 9, 400, 1200, 3000 ( Expected)
// //  1200, 3000, 400, 5, 9 ( Answer)
// const numbers = [5,9,1200,400,3000];
// //            ["5", "9", "1200", "400", "3000"];
// // ASCII Key  [ 53,  57,   49,     52,     51]
// numbers.sort();
// console.log(numbers);

// const userName = ['hrshit', 'abcd', 'mohit', 'nitish'];
// userName.sort();
// console.log(userName);


// const userName = ['hrshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// // In answer 1st show capital A-Z than small a-z
// userName.sort();
// console.log(userName);


// sort in Ascending order
const numbers = [5,9,1200,410,3000];
numbers.sort( (a,b)=>{
    return a-b;
});
//  or
// numbers.sort((a,b)=> a-b);
// console.log(numbers);

//  1200, 410
//  a-b ---> 790
//  a-b ---> positive (greater than 0)---> b,a(swap position)
//  410, 1200

// a-b ---> negative ----> a,b
// 5,9 ---> -4




// // sort in Descending order
// const numbers = [5,9,1200,410,3000];
// numbers.sort( (a,b)=>{
//     return b-a;
// });
// //  or
// // numbers.sort((a,b)=> b-a);
// console.log(numbers);

// price LowToHigh HighToLow
const products = [
    { productId:1, productName:"p1", price:300},
    { productId:2, productName:"p2", price:3000},
    { productId:3, productName:"p3", price:200},
    { productId:4, productName:"p4", price:8000},
    { productId:5, productName:"p5", price:500}
];

// // LowToHigh
// products.sort( (a,b)=>{
//     return a.price - b.price;
// });
// console.log(products);
// // above sort method change our original 
// //  products which I donnot like.


// solution: clone
// const lowToHigh = products.slice(0).sort( (a,b)=>{
//     return a.price-b.price;
// });
// console.log(products);
// console.log(lowToHigh);



// highToLow
const highToLow = products.slice(0).sort( (a,b)=>{
    return b.price-a.price;
});
console.log(products);
console.log(highToLow);