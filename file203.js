//  (1:58:31- )
// function returning promise

function ricePromise(){
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
    return new Promise( (resolve, reject)=>{
       if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice") ){
           resolve( {value:"friedrice"});   
       }
       else{
           reject("could no do it...");
       }
    });
 }
 
 ricePromise().then(
      (myfriedRice)=>{
         console.log("let's eat", myfriedRice);
      }
   ).catch(
      (error)=>{
         console.log(error);
      }
   )
   
 
 //  promise && setTimeout 
 
 // I want to resolve / reject promise after 2 seconds
 
 function myPromise(){
    return new Promise( (resolve, reject)=>{
       //  const value = true;
       const value = false;
        setTimeout( ()=>{
             if(value){
                 resolve();
             }
             else{
                 reject();
             }
        }, 2000);
    })
 }
 
 myPromise()
       .then( ()=>{ console.log("resolved")} )
       .catch( ()=>{ console.log("rejected")}  )
 

       

// 2:02:34
// promise resolve

// const myPromise = Promise.resolve(5);

// myPromise.then( val=>{
//    console.log(val);
// });

// // or
// Promise.resolve(45678).then( val=>{
//    console.log(val);
// });



// 2:03:44 (promise chaining)
// then()
// then method hamesha promise return karta hai



// function myPromise(){
//    return new Promise( resolve=>{
//       resolve("foo");
//    });
// }

// myPromise()
//       .then( value=>{
//           console.log(value);
//           value +=" batttt";
//          //  return undefined; (Agr hm "promise chain" bnane ka lya "return value" nhi likha ge tu ye by default "return undefined" kre ga.)
//           return value; // ( ye ase he ha "return promise.resolve(value)   ) 
//       })
//       .then( value=>{
//           console.log(value);
//           value +=" is";
//           return value;
//       })
//       .then( value=>{
//           console.log(value);
//           value += " good...";
//           return value;
//       })
//       .then( val=>{
//          console.log(val);
//       });