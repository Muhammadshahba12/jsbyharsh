// classList
// add()
// remove()
// contains()
// toggle()


// <!DOCTYPE html>
// <html lang="en">
// <head>
//         <title>classList</title>
// </head>
// <body>
//     <div class="text-box yes no box-apply">
//             <h1 id="head" class ="heis now one of the easier add">World's <span style="display:none;">Number One</span> Biggest University</h1>
//             <p>Making Website is now one of the easiesr thing in the world.You just need to learn
//                 HTMl,Css,<br> Javascript and you are good to go.</p>
//             <a href="asdfghjk" class="hero-btn">Visit Us to know More</a>	 
//     </div>
// </body>


const head = document.getElementById(".text-box");

console.log(head.classList);
head.classList.add("text");
head.classList.remove("text-box");
head.classList.contains("text");

//  1st dafa ma "yes" class add ho jay ge.
head.classList.toggle("yes");
// 2nd dafa likhna pr "yes" class remove ho jay ge. 
head.classList.toggle("yes");

