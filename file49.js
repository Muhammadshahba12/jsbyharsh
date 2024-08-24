// (5:33:20- 5:43:14)
// lexical scope

// function myApp(){
//     const myVar = "value1";
//     function myFunc(){};
//     const myFunc2 = function(){};
//     const myFunc3 = ()=>{};
//     console.log(myVar);
// }
// myApp();



// function myApp(){
//     const myVar = "value1";
//     function myFunc(){
//         console.log("Inside myFunc");
//     };
//     console.log(myVar);
//     myFunc();
// }
// myApp();




// function myApp(){
//     const myVar = "value1";
//     function myFunc(){
//         const myVar= "value59";
//         console.log("Inside myFunc", myVar);
//     };
//     console.log(myVar);
//     myFunc();
// }
// myApp();



// function myApp(){
//     const myVar = "value1";
//     function myFunc(){
//         console.log("Inside myFunc", myVar);
//     };
//     console.log(myVar);
//     myFunc();
// }
// myApp();


// const myVar = "value1";
// function myApp(){
//     function myFunc(){
//         console.log("Inside myFunc", myVar);
//     };
//     console.log(myVar);
//     myFunc();
// }
// myApp();


// const myVar = "value1";
// function myApp(){
//     function myFunc(){
//         const myFunc2  = ()=>{
//             console.log("Inside myFunc", myVar);
//         }
//         myFunc2();
//     };
//     console.log(myVar);
//     myFunc();
// }
// myApp();



let myVar = "value1";
function myApp(){
    function myFunc(){
        const myFunc2  = ()=>{
            myVar = "value63";
            console.log("Inside myFunc", myVar);
        }
        myFunc2();
    };
    console.log(myVar);
    myFunc();
}
myApp();