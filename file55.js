// (6:13:28- 6:18:45)
// function returning function

// function myFunc(){
//     return "a";
// }
// const ans = myFunc();
// console.log(ans);


// function myFunc(){
//     return [1,2,3,4,5];
// }
// const ans = myFunc();
// console.log(ans);


// function myFunc(){
//     return {firstName:"M.Shahbaz", age:29}
// }
// const ans = myFunc();
// console.log(ans);


// function myFunc(){
//     return 1;
// }
// const ans = myFunc();
// console.log(ans);


// function myFunc(){
//     function hello(){
//         console.log("Hello world!...");
//     }
//     return hello;
// }
// const ans = myFunc();
// console.log(ans);



// function myFunc(){
//     function hello(){
//         console.log("helllo world!....");
//     }
//     return hello;
// }
// const ans = myFunc();
// ans();





// Higher order function
function myFunc2(name){
     console.log("Inside myFunc2");
     console.log(`Your name is ${name}`);
}
function myFunc(callback){
    console.log("Hello there I am a func and I can...");
    callback("M.Shahbaz");
}
myFunc( myFunc2);



// function myFunc(){
//     function hello(){
//         return "helllo world!....";
//     }
//     return hello;
// }
// const ans = myFunc();
// console.log( ans() );



// function myFunc(){
//     return function(){
//         return "helllo world!....";
//     };
// }
// const ans = myFunc();
// console.log( ans() );




//  Ruff workkkkkkkkkk
// function myFunc(){
//     function hello(){
//         console.log("helllo world!....");
//     }
//     return hello();
// }
// const ans = myFunc();
// ans;

