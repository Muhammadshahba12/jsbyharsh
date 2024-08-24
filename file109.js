/* <main>
       <div class="grandfather box">
             Grandfather
             <div class="parent box">
                   parent
                   <div class="child box">
                         child
                   </div>
             </div>
       </div>
</main>


main{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.box{
    color: #fff;
    padding: 22px 40px;
    min-height: 200px;
    min-width: 250px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
}
.grandfather{
  background-color: #b1d4e0;
}
.parent{
   background-color: #145da0;
}
.child{
   background-color: #0c2d48;
} */


const grandParent = document.querySelector(".grandfather");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


//  capture (only third parameter "true" is required)
//  document -> Grandfather -> Father -> Child
child.addEventListener("click", function(){
    console.log("capture child!");
},true);

parent.addEventListener("click", function(){
    console.log("capture parent!");
},true);

grandParent.addEventListener("click", function(){
    console.log("capture grandParent!");
},true);

document.addEventListener("click", function(){
    console.log("capture document!");
},true);



//  Bubble/ propagation 
//  Child  -> Father-> Grandfather  -> document
child.addEventListener("click", function(){
    console.log("Bubble child!");
});

parent.addEventListener("click", function(){
    console.log("Bubble parent!");
});

grandParent.addEventListener("click", function(){
    console.log("Bubble grandParent!");
});

document.addEventListener("click", function(){
    console.log("Bubble document!");
});


// Event Delegation ( "e.target" ke madad se hm js pr click kre ge ussi ka he tag show ho ga )
document.addEventListener("click", (e)=>{
    console.log(e.target);
});




 