// Assignment 
// click on btn will change color of body.

/* <div class="con">
<h1 id="h1">rgb(255, 255, 255)</h1>
<button id="btn" >Click Me!</button>
</div> */



// .con{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height:100vh;
//     flex-direction: column;
// }
// #h1{
//     display: block;
//     margin-bottom: 12px;
//     color: #fff;
// }
// .con button{
//     outline: none;
//     border: 0;
//     padding: 12px 32px;
//     /* color: #fff; */
//     font-size: 30px;
//     border-radius: 5px;
//     /* background-color: rgb(145, 162, 145);  */
//     background-color: #fff;
//     cursor: pointer;   
// }


const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");
const body = document.body;
// console.log(btn);


btn.addEventListener("click", function(){
     const red = Math.floor(Math.random()*256);
     const green = Math.floor(Math.random()*256);
     const blue = Math.floor(Math.random()*256);
 
     const rgb = `rgb(${red}, ${green}, ${blue})`;
     body.style.backgroundColor = rgb;
     h1.textContent = rgb;

     btn.style.color  = rgb;
    //  console.log(rgb);
});