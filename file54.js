// (6:05:53- 6:13:08)
//  callback function 

// function myFunc(){
//     console.log("Hello world...");
// }
// myFunc();



// function myFunc(a){
//     console.log(a);
//     console.log("Hello world...");
// }
// myFunc( [1,4,5,6,9] );


// function myFunc(a){
//     console.log(a);
//     console.log("Hello world...");
// }
// myFunc("abc");



// function myFunc(obj){
//      console.log(obj);
//      console.log("Hello world...");
// }
// myFunc( {firstName:"M.Shahbaz"} );


// function myFunc2(){
//     console.log("Inside my myFunc2");
// }

// function myFunc(a){
//     console.log(a);
// }
// myFunc();


// function myFunc2(){
//     console.log("Inside myFunc2");
// }
// function myFunc(a){
//     console.log(a);
// } 
// myFunc(myFunc2);


// function myFunc2(){
//     console.log("Inside myFunc2");
// }
// function myFunc(a){
//     a();
// } 
// myFunc(myFunc2);


// function myFunc2(){
//     console.log("Inside myFunc2");
// }
// function myFunc(callback){
//      callback();
// }
// myFunc(myFunc2);


// function myFunc2(){
//     console.log("Inside myFunc2");
// }
// function myFunc(callback){
//     console.log("Hello there i'm func");
//     callback();
// }
// myFunc(myFunc2);



// function myFunc2(name){
//     console.log("Inside myFunc2");
//     console.log(`your name is ${name}`);
// }
// function myFunc(callback){
//     console.log("Hello I'm there");
//      callback();
// }
// myFunc(myFunc2);


function myFunc2(name){
    console.log("Inside myFunc2");
    console.log(`your name is ${name}`);
}
function myFunc(callback){
    console.log("Hello I'm there");
     callback("M.Shahbaz");
}
myFunc(myFunc2);