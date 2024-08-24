// const head = document.getElementById("header");
// const head = document.getElementsByTagName("header");
// const head = document.getElementsByClassName("text-box");
// const head = document.querySelector(".nav-item");
// const head = document.querySelectorAll(".nav-item");
// console.log(head);

const head = document.getElementById("header");

// console.log(head.textContent);
// console.log(head.innerText);
// head.textContent = "owner of the";
// head.innerText = "one";

// head.style.backgroundColor = "black";

// head.setAttribute("class","yes");
// const a = head.getAttribute("class");
// console.log(head);
// console.log(a);

// const nav = document.querySelectorAll(".nav-item");
// console.log(nav);

// for(let i=0; i<nav.length; i++){
//     nav[i].style.color = "red";
// }

// for( let navItem of nav){
//     navItem.style.color = "white";
// }

// nav.forEach( navItem=>{
//     navItem.style.color = "green";
// });


// let nav = document.getElementsByClassName("nav-item");
// console.log(nav);

// for(let i=0; i<nav.length; i++){
//     nav[i].style.color= "yellow";
// }

// for(let navItem of nav){
//     navItem.style.backgroundColor = "blue";
// }

// // nav.forEach( navItem =>{
// //     navItem.style.color = "white";
// // });

// nav  = Array.from(nav);
// nav.forEach( navItem=>{
//     navItem.style.color = "white";
// });


// const h = document.querySelector("#head");
// console.log(h);

// h.innerHTML = "<h1>world</h1>";
// h.innerHTML = h.innerHTML + "<p>biggest trophy</p>";
// h.innerHTML += "<a href=\"\">welcome</a>";

// console.log(head.getRootNode().childNodes[1].children[1].parentElement);
// console.log(document.getRootNode().childNodes[1].children[0].parentElement.children[0].childNodes[1].previousSibling.nextElementSibling);

const a = head.children[1];
a.classList.add("yes");
a.classList.add("no");
a.classList.add("key");
a.classList.add("boom");
a.classList.remove("yes");

// console.log(a.classList.contains("no") );
console.log(a.classList.toggle("nooooo") );
console.log(a);
console.log(a.classList.toggle("nooooo") );



// const sliders = document.querySelectorAll(".slide");
// // let index = 0;

// let index = 0;
// show(index);
// let timer = setInterval(auto, 1000);

// function auto(){
//     index +=1;
//     show(index);
// }
// function show(n){
//     for(let slide of sliders){
//         slide.style.display = "none";
//     }

//     sliders[index].style.display = "block";
// }





// const sliders = document.querySelectorAll(".slide");

// // let i=0;
// // show(i);
// // let timer = setInterval(display, 3000);

// function reset(){
//     console.log("timer", timer);
//     clearInterval(timer);
//     timer = setInterval(display, 3000);
//     console.log("timer", timer);
// }

// function plusSlides(index){
//      i += index;
//      show(i);
//      reset();
// }
// function display(){
//         i += 1;
//         show(i);  
// }

// function show(n){
//     for(let slide of sliders){
//         slide.style.display = "none";
//     }

//     if(n<0){ i= sliders.length-1};
//     if(n>=sliders.length){ i=0};

//     sliders[i].style.display = "block";
// }










// for(let slide of silders){
//         slide.style.display = "none";
// }



// console.log(sliders.length);

// let index = 1;
// show(index);
// let timer = setInterval(auto,5000);

// function reset(){

// 	clearInterval(timer);
// 	timer = setInterval(auto,5000);
// }

// function plusSlides(i){
//         // clearInterval(timer); 
//         index += i;
//         show(index);
//         console.log("....",i);
//         reset();
//  }

// function currentSlide(i){
//        clearInterval(timer); 
// //        slideIndex = i;
//        showSlides(i);
// }

// function auto(){
//         index += 1;
//         show(index);
// }

// function show(i){
//         // for(let slide of sliders){
//         //         slide.style.display = "none";
//         // }




//         // for(let a=0; a < sliders.length; a++){
//         //         sliders[a].style.display = "none";
                    
//         // }
//         // if(index>sliders.length){ index=1;}
//         // if(index<1){ index=sliders.length}
//         // console.log([index-1]);
//         // sliders[index-1].style.display = "block";
        



//         // if(i>=sliders.length){
                
//         //         i=1; 
//         // // //        console.log(index-1);
//         //         sliders[i-1].style.display = "block";
//         //         console.log(i);
//         //         i++;
//         // }
//         // else{
//         //         // console.log(index-1);
//         //         sliders[i-1].style.display = "block";
//         //         console.log(i);
//         // }
        
// }




// function show(i){
//         for(let slide of sliders){
//                 slide.style.display = "none";
//         }

//         console.log(i);
//         sliders[i].style.display = "block"; 
//         sliders[i].style.backgroundColor = "orange"; 
// }

// function display(){
//         // for(let slide of silders){
//         //         slide.style.display = "none";
//         // }

//         // sliders[].style.display = "block";
//        for(let i=0; i<sliders.length; i++){
//            show(i);
//        }

       
// // setInterval(show, 1000);


// }
// setInterval(display, 1000);



// // setInterval(display, 1000);

// display();












// console.log(sliders.length);


// function display(){
//         // for(let slide of silders){
//         //         slide.style.display = "none";
//         // }

//         // sliders[].style.display = "block";
//        for(let i=0; i<sliders.length; i++){
//            show(i);
//        }

// }

// function show(i){
//         for(let slide of sliders){
//                 slide.style.display = "none";
//         }

//         console.log(i);
//         sliders[i].style.display = "block"; 
//         sliders[i].style.backgroundColor = "orange"; 
// }

// setInterval(display, 1000);