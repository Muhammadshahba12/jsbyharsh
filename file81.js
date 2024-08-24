// (9:45:57- 9:56:10)

// function hello(){
//    console.log("Hello world!");
// }
// hello();

//  javascript function ===> function + Object

//  js function is object bcz
//  you can add your own property
// hello.myOwnProperty = "very unique message.";
// console.log(hello.myOwnProperty);
// console.log(hello());

//  Name property ---> tell us function name
// console.log(hello.name);

//  function provides more useful properties
//  call(), apply(), bind()

// function provide us "empty object"
//  object known as "prototype"

// console.log(hello.prototype);
//  iss se object l rha ha jss ma ak he property ha constructor
//  aur constructor ke value yahi function ha jo hm ne banaya ha


// only function provide "prototype property"
// function hello1(){
//     console.log("Hello world!");
// }
//  const func = ["value1"];
// if(func.prototype){
//     console.log("prototype is present.");
// }
// else{
//     console.log("protype is Not present.");
// }


// const obj = { key1: "value1"};
// if(obj.prototype){
//     console.log("prototype is present.");
// }
// else{
//     console.log("protype is Not present.");
// }

// const func = ["value1"];
// if(func.prototype){
//     console.log("prototype is present.");
// }
// else{
//     console.log("protype is Not present.");
// }


// we can add value in prototype
function hello(){
    console.log("Hello world!");
 }
 hello.prototype.abc = "abc";
 hello.prototype.xyz = "xyz";
 hello.prototype.sing = function (){
    return "ttu ytft";
 }
//  console.log(hello.prototype);
// console.log(hello.sing());
// console.log(hello.prototype.sing());

//  "__proto__" chain create krta ha, ak reference ha.
//  (proto ak reference ha jo bhi chain hm log create kre ga.)
//  "prototype" is object which provided by "function". 