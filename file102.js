//  DOM (Document Object Model)

// getElementById()            1
// querySelector()             2
// querySelectorAll()          3
// getElementsByClassName()    4
// getElementsByTagName()      5

// innerText                   6
// textContent                 7
// innerHTML                   8

// style                       9

// getAttribute("")           10
// setAttribute("", "")       11




// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         			          *{
// 					    margin:0;
// 						padding:0;
// 						box-sizing:border-box;
// 					  }
// 					  body{
// 					    font-family:arial;	
// 					  }
// 					  header{
// 					    background-image:linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('images/uv/banner.png');
// 						min-height:100vh;
// 						width:100%;
// 						background-position:center;
// 						background-size:cover;
// 						position:relative;
// 					  }
// 					  nav{
// 					    /* border:2px solid red; */
// 						display:flex;
// 						justify-content:space-between;
// 						align-items:center;
// 						padding:2% 6%;
// 					  }
// 					  nav img{
// 					    /* border:2px solid red; */
// 					    width:150px;
// 					  }
// 					  .nav-links{
// 					    /* border:2px solid gray; */
// 						flex:1;
// 						text-align:right;
// 					  }
// 					  .nav-links ul{
// 					     /* border:2px solid red; */
						 
// 					  }
// 					  .nav-links ul li{
// 						 /* border:2px solid black; */
// 						 list-style-type:none;
// 						 display:inline-block;
// 						 padding:8px 12px;
// 						 position:relative;
// 					  }
//                       .nav-links ul li a{
// 					     font-size:13px; 
//                          color:#fff;
//                          text-decoration:none;						 
// 					  }
//                       .nav-links ul li::after{
// 					      content:"";
// 						  display:block;
// 						  height:2px;
// 						  width:0%;
// 						  background:red;
// 						  margin:auto;
// 						  transition:0.5s;
// 					  }
//                        .nav-links ul li:hover::after{ 					  
// 					       width:100%;
// 					  }
					  
// 					  .text-box{
// 					      /* border:2px solid red; */
// 					      width:90%;
// 						  color:#fff;
// 						  position:absolute;
// 						  top:50%;
// 						  left:50%;
// 						  transform:translate(-50%,-50%);
// 						  text-align:center;
// 					  }
// 					  .text-box h1{
// 					      font-size:62px;
// 					  }
// 					  .text-box p{
// 					      margin:10px 0px 40px;
// 						  font-size:14px;
// 						  color:#fff;
// 					  }
// 					  .hero-btn{
// 					      display:inline-block;
// 						  text-decoration:none;
// 						  color:#fff;
// 						  border:1px solid #fff;
// 						  padding:12px 34px;
// 						  font-size:13px;
// 						  background:transparent;
// 						  position:relative;
// 						  cursor:pointer;
// 					  }
// 					  .hero-btn:hover{
// 					      border:1px solid #f44336;
// 						  background:#f44336;
// 						  transition:1s;
// 					  }
// 					  .fa-solid{
// 						  display:none;
// 				      }
//     </style>

// </head>
/* <body>
<header id="header">
        <nav id="nav">
              <!-- <a  class="g" href=""><img src="images/uv/logo.png"></a> -->
              <div class="nav-links" id="navLinks">
                    <i class="fa-solid fa-xmark" onclick="hideMenu()"></i>
                    <ul >
                         <li class="nav-item">HOME</li>
                         <li class="nav-item">ABOUT</li>
                         <li class="nav-item">COURSE</li>
                         <li class="nav-item">BLOG</li>
                         <li class="nav-item">CONTACT</li>
                    </ul>
              </div>
              <i class="fa-solid fa-bars" onclick="showMenu()"></i>
        </nav>
        <div class="text-box">
               <h1 id="head" class ="heis now one of the easier add">World's <span style="display:none;">Number One</span> Biggest University</h1>
               <p>Making Website is now one of the easiesr thing in the world.You just need to learn
                    HTMl,Css,<br> Javascript and you are good to go.</p>
               <a href="asdfghjk" class="hero-btn">Visit Us to know More</a>	 
        </div>
        <div class="text-box"></div>
        <div class="text-box"></div>
</header> */

// <script src="112practice.js"></script>

// </body>
// </html>



                // DOM :-
//  How to target Elements :-
const head = document.getElementById("head");
// const head = document.querySelector("#header");
// const head = document.querySelectorAll(".nav-item");
// const head = document.getElementsByClassName("nav-item");
// const head = document.getElementsByTagName("div");


// innerText && textContent :-
// console.log(head.innerText);
// console.log(head.textContent);
// head.innerText = "A Good University";
// head.textContent = "Famous World's university.";

//  style :-
// head.style.backgroundColor = "white";
// head.style.color = "gray";
// head.style.padding = "10px 0px 5px";

// getAttribute & setAttribute :- 
// const a = document.querySelector(".hero-btn");
// console.log(a.getAttribute("href"));
// a.setAttribute("href","https://www.google.com");
// console.log(a.getAttribute("href"));

// innerHTML :-
// const textBox = document.querySelector(".text-box");
// textBox.innerHTML  = "<h1 id=\"head\">Famou world's university...</h1>";
// textBox.innerHTML += "<p>Making Weebsite is now one of the easier thing in the world. You just need to learn HTML, Css, <br> JavaScript and you are good to go.</p>";
// textBox.innerHTML += "<button class=\"hero-btn\" href=\"\">Now, you can visit our website...</button>";

console.log(head);


                    // Iterable :-
//  getElementsByClassName --->give us "HTMLCollection", "for" & "for of" loop you can use 
// cannot use "for each" loop for "HTMLCollection"(if we convert into array than we can use.)

// let navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);
// for(let i=0; i<navItems.length; i++){
//     navItems[i].style.backgroundColor = "pink";
//     navItems[i].style.color = "red";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "blue";
// }

// HTMLCollection----> to Array
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems), typeof navItems);

// navItems.forEach( (navItem)=>{
//     navItem.style.backgroundColor = "pink";
// });



//  querySelectorAll --->give us "NodeList", "for" & "for of" & "for each" loop you can use 
// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems);

// for(let i=0; i<navItems.length; i++){
//     navItems[i].style.backgroundColor = "pink";
//     navItems[i].style.color = "red";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "blue";
// }

// navItems.forEach( (navItem)=>{
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
// });