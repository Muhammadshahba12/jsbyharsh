//  static list vs Live list



/* <div class="container">
<div class="create-todolist todo box list">
<input type="search" placeholder="Todo list title" name="" id="title">
<input type="search" placeholder="Year enter" name="" id="year">
<button id="btn1" class="btn" type="submit" >Add 1</button>
<button id="btn2" class="btn" type="submit" >Add 2</button>
<button id="btn3" class="btn" type="submit" >Add 3</button>
</div>
<ul class="todo_list">
<!-- li{item $}*5 -->
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
</ul>
<div id="head" class="ggg">this is header.</div>
<div class="list">
<h3 style="text-align: center;">Your todo list:-</h3>
</div>
</div> */



// querySelectorAll     ==> give us "static list"
// getElementsByTagName ==> give us "Live list"


// querySelectorAll --->  static list (NodeList(5) [li, li, li, li, li] )
const ul = document.querySelector("ul");
const lists = ul.querySelectorAll("li");

const li = document.createElement("li");
li.textContent = "list item 6";
ul.append(li);

console.log(lists);


// getElementsByTagName ---> Live list (HTMLCollection(6) [li, li, li, li, li, li])
const ul1 = document.querySelector("ul");
const li1 = document.createElement("li");
li1.textContent = "list item 6";
ul1.append(li1);

const lists1 = document.getElementsByTagName("li");
console.log(lists1);

// console.log( to.getBoundingClientRect().width );


                 //  intro to Events :-
/* <button type="submit" onclick = "console.log('you clickked')">Add</button> */

// btn.onclick = function(){
//     console.log("u clicked!!!!");
// }

// btn.addEventListener("click", function(){
//     console.log("yyyyy");
// });

// btn.addEventListener("click", ()=>{
//     console.log("yyyyy");
// });




                //  this use :-
// const btns = document.querySelectorAll(".btn");

// for(let btn of btns){
//     btn.addEventListener("click", function(){
//         console.log(this.textContent);
//     });
// }


// for(let i=0; i<btns.length; i++){
//      btns[i].addEventListener("click", function(){
//         console.log(this.textContent);
//      });
// }

// btns.forEach( function(b){
//     b.addEventListener("click", function(){
//          console.log(this.textContent);
//     });
// });



                //  event object
// btn1.addEventListener("click", function(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.currentTarget);
// });                



                // Events behind the scene
console.log("script start!");

const btns = document.querySelectorAll(".btn");
btns.forEach( (btn)=>{
    btn.addEventListener("click", function(){
        let num = 0;
        for(let i=0; i<1000000000; i++){
            num += i;
        }
        console.log(this.textContent, num);
    });
});

let outer = 0;
for(let i=0; i<100000000; i++){
    outer +=i;
}
console.log("value of outer", outer);

console.log("script end!");                




