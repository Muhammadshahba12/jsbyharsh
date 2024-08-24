//         - (1:58:30)

// function func(a){
//     console.log("this is fun1");
//     a();
// }

// function func2(){
//     console.log("this is fun2");
// }

// func(func2);




// function func(a){
//     console.log("this is fun1...");
//     a();
// }

// func( function(){
//     console.log("this is fun2...");
// });



// function getTwoNumber(num1, num2, a){
//     console.log(num1, num2);
//     a(num1, num2);
// }

// function sumTwoNumber(n1, n2){
//     console.log(n1+n2);
// }
// getTwoNumber(2, 3, sumTwoNumber);


// function two(n1, n2, s){
//     console.log(n1, n2);
//     s(n1, n2);
// }
// // function sum(num1, num2){
// //     console.log(num1+num2);
// // }
// two(33, 11,function(num1, num2){
//     if(typeof num1 ==="number" && typeof num2==="number"){
//         console.log(num1+num2);
//     }
//     else{
//         console.log("ÿou enter wrong data...");
//     }
    
// });

// ...................................
// function twoNumbers(num1, num2, callback){
//     console.log(num1, num2);
//     callback(num1, num2);
// }

// function sum(a, b){
//     if( typeof a ==="number" && typeof b ==="number"){
//         console.log(a+b);  
//     }
//     else{
//         console.log("wrong data!");
//     }
      
// }

// twoNumbers( "5",7, sum);


// function two(num1, num2, onSuccesss, onfailure){
//     if(typeof num1 === "number" && typeof num2 ==="number"){
//         onSuccesss(num1, num2);
//     }
//     else{
//         onfailure();
//     }
// }
// two(6,"6", (a, b)=>{
//         console.log(a+b);
//     },
//     ()=>{
//         console.log("wrong data enter...");
//     });



/* <h1 id="one">hello world</h1>
<h1 id="two">hello world</h1>
<h1 id="three">hello world</h1>
<h1 id="four">hello world</h1>
<h1 id="five">hello world</h1>
<h1 id="sex">hello world</h1>
<h1 id="seven">hello world</h1>
<h1 id="eight">hello world</h1>
<h1 id="nine">hello world</h1>
<h1 id="ten">hello world</h1> */

const h1 = document.querySelector("#one");
const h2 = document.querySelector("#two");
const h3 = document.querySelector("#three");
const h4 = document.querySelector("#four");
const h5 = document.querySelector("#five");
const h6 = document.querySelector("#sex");
const h7 = document.querySelector("#seven");
const h8 = document.querySelector("#eight");
const h9 = document.querySelector("#nine");
const h10 = document.querySelector("#ten");

// setTimeout(()=>{
//     h1.textContent = "Heading one...";
//     h1.style.color = "red";
// }, 1000);

// setTimeout(()=>{
//     h2.textContent = "Heading two...";
//     h2.style.color = "red";
// }, 2000);

// setTimeout(()=>{
//     h3.textContent = "Heading three...";
//     h3.style.color = "red";
// }, 3000);

// setTimeout(()=>{
//     h4.textContent = "Heading four...";
//     h4.style.color = "red";
// }, 4000);

// setTimeout(()=>{
//     h5.textContent = "Heading five...";
//     h5.style.color = "red";
// }, 15000);

// setTimeout(()=>{
//     h6.textContent = "Heading six...";
//     h6.style.color = "red";
// }, 6000);

// setTimeout(()=>{
//     h7.textContent = "Heading seven...";
//     h7.style.color = "red";
// }, 7000);

// setTimeout(()=>{
//     h8.textContent = "Heading eight...";
//     h8.style.color = "red";
// }, 8000);


//  callback hell
// setTimeout( ()=>{
//      h1.textContent = "heading one.";
//      h1.style.color = "red";

//      setTimeout( ()=>{
//         h2.textContent = "heading two.";
//         h2.style.color = "cyan";

//         setTimeout( ()=>{
//             h3.textContent = "heading three.";
//             h3.style.color = "green";

//             setTimeout( ()=>{
//                 h4.textContent  =  "heading four.";
//                 h4.style.color = "blue";

//                 setTimeout( ()=>{
//                     h5.textContent = "heading five";
//                     h5.style.color = "pink";

//                     setTimeout( ()=>{
//                         h6.textContent = "heading six";
//                         h6.style.color = "yellow";

//                         setTimeout( ()=>{
//                             h7.textContent = "heading seven";
//                             h7.style.color = "brown";

//                             setTimeout( ()=>{
//                                 h8.textContent = "heading eight";
//                                 h8.style.color = "black";
//                             }, 8000);
//                         }, 7000);
//                     }, 6000);
//                 }, 5000);
//             }, 4000);
//         }, 3000);
//      }, 2000);
// }, 1000);


// function changeText( element, text, colorName, time, onSuccessCallback, onFailureCallback){
//     setTimeout( ()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = colorName;

//             if(onSuccessCallback){
//                 onSuccessCallback();
//             }
//         }
//         else{
//             if(onFailureCallback){
//                 onFailureCallback();
//             }
//         }     
//     }, time);
// }

// pyramid of dome
// changeText(h1, "heading one", "violet", 1000, ()=>{
//   changeText(h2, "heading two", "purple", 1000, ()=>{ 
//     changeText(h3, "heading three", "red", 1000, ()=>{
//       changeText(h4, "heading four", "pink", 1000, ()=>{
//          changeText(h5, "heading five","green", 1000, ()=>{
//            changeText(h6, "heading six", "blue", 1000, ()=>{
//              changeText(h7, "heading seven", "brown", 1000, ()=>{
//                changeText(h8, "heading eight", "cyan", 1000, ()=>{
//                  changeText(h9, "heading nine", "#cda562", 1000,()=>{
//                    changeText(h10, "heading ten", "#dca652", 1000, ()=>{

//                    }, ()=>{ console.log("heading10 doesn't exist")})
//                  }, ()=>{ console.log("hading9 doesn't exist");});
//                }, ()=>{ console.log("heading8 doesn't exist ")});
//              }, ()=>{ console.log("heading7 doesn't exist")});
//            }, ()=>{ console.log("heading6 doesn't exist")});
//          }, ()=>{ console.log("heading5 doesn't exist")});
//       }, ()=>{ console.log("heading4 doesn't exist")});  
//     }, ()=>{ console.log("heading3 doesn't exist")});
//   }, ()=>{ console.log("heading2 doesn't exist.") });
// }, ()=>{ console.log("heading1 doesn't exist."); });

              //  promise( we less produce promise but cosume mostly )
// const bucket = ["coffee","chips","vegetables", "salt", "rice"];

// promise produce ( promise have "executor function")
// const friedRicePromise = new Promise( (resolve, reject)=>{
//     if( bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         // resolve("Fried rice");  // (here you can pass string)
//         resolve({value:"friedRice"}); // (you can pass object) 
//     }
//     else{
//         // reject("couldn't do it.");  //(string value)
//         // reject(new Error("something missing from bucket.") ); // (you can pass Error object)
//         resolve([]); // you can pass array 
//     }
// });

//  promise consume
// friedRicePromise.then(  
//     // jb promise resolve ho ga( yaha value wo aya ge jo hm ne promise ko produce krte waqat "resolve" ma likhe the)
//     (myFriedRice)=>{
//       console.log("Let's eat",myFriedRice);
//     },
//     // jb promise reject ho ga
//     (error)=>{
//       console.log(error);
//     }  
// );

//  Another way to promise consume
// friedRicePromise.then(  
//   //  hm srf care kr rhe hn jb promise reject ho ga
//   null,
//   (error)=>{
//     console.log(error);
//   }  
// );


            //proimse work Asynchronously 
            // produce => store in js memory
            // cosume => done in  browser

//  1st: miscrotask queue "promise" shown
//  2nd: callback queue "aetTimeout callback functions" shown
console.log("script start...");

const bucket = ["coffee","chips","vegetables", "salt", "rice"];
const friedRicePromise = new Promise( (resolve, reject)=>{
  if( bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
      resolve({value:"friedRice"}); 
  }    
  else{
      resolve("couldn't do it."); // you can pass array 
  }
});

friedRicePromise.then(  
  (myFriedRice)=>{
    console.log("Let's eat",myFriedRice);
  },
  ).catch(
  (error)=>{
    console.log(error);
  });

setTimeout( ()=>{
   console.log("hello from setTimeout...");
}, 1000);

for(let i=0; i<=100; i++){
  console.log( Math.random() );
}

console.log("script start...");

