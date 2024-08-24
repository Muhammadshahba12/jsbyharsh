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


// function myPromise(ele, text, color, time){
//    return new Promise( (resolve)=>{
//        resolve(ele.textContent = text, ele.style.color = color);
//    });
// }

// myPromise(h1,"heading one","green", 1000)
//      .then( value=>{
//           value += h2.textContent = text;
//      });


function changeText(ele, text, color, time){
   return new Promise( (resolve)=>{
      setTimeout(()=>{
         if(ele){
            ele.textContent = text;
            ele.style.color = color;
            resolve();
         }
         else{
            // reject();
            reject("Element doesn't found..");// for short syntax
         }
      }, 1000); 
      
   });
}

// const returnedPromise = changeText(h1,"heading one","green", 1000);
// returnedPromise.then( ()=>{
//     return changeText(h2," heading two", "purple", 1000);
// })
// .then;

// //return changeText(h2,"heading two", "purple", 1000); // (Agr hm log return nhi likha ge tu sare text ka color ak dm change ho jay ga...)
// changeText(h1,"heading one","green", 1000)
//    .then( ()=>{
//       return changeText(h2,"heading two", "purple", 1000);
//    })
//    .then( ()=>{
//       return changeText(h3,"heading three", "purple", 1000);
//    })   
//    .then( ()=>{
//       return changeText(h4," heading four", "purple", 1000);
//    })
//    .then( ()=>{
//       return changeText(h5," heading five", "purple", 1000);
//    })
//    .then( ()=>{
//       return changeText(h6," heading six", "purple", 1000);
//    })
//    .then( ()=>{
//       return changeText(h7," heading seven", "purple", 1000);
//    })
//    .then( ()=>{
//       return changeText(h8," heading eight", "purple", 1000);
//    })
//    .then( ()=>{
//       return changeText(h9," heading nine", "purple", 1000);
//    })
//    .then( ()=>{
//       return changeText(h10," heading ten", "purple", 1000);
//    });


// short syntax   
changeText(h1,"heading one", "purple", 1000)
    .then( ()=> changeText(h2,"heading two", "purple", 1000) )
    .then( ()=> changeText(h3,"heading three", "purple", 1000))
    .then( ()=> changeText(h4,"heading four", "purple", 1000))
    .then( ()=> changeText(h5, "heading five", "purple", 1000))
    .then( ()=> changeText(h6,"heading six","purple", 1000))
    .then( ()=> changeText(h7,"heading seven", "purple", 1000))
    .then( ()=> changeText(h8,"heading eight", "purple", 1000))
    .then( ()=> changeText(h9,"heading nine", "purple", 1000))
    .then( ()=> changeText(h10, "heading ten", "purple", 1000))
    .catch( (error)=>{
         alert(error);
    })
