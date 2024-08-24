// appendChild()
// insertBefore()
// replaceChild()
// removeChild()


/* <ul class="todo_list">
        <li class="yes">Todo list child 1.</li>
</ul> */



// appendChild()
// const ul1 = document.querySelector(".todo_list");
// const li1 = document.createElement("li");
// li1.textContent = "you can add list1.";

// ul1.appendChild(li1);
// console.log(ul1);


// insertBefore()
// const ul2 = document.querySelector(".todo_list");
// const ref2 = ul2.querySelector(".yes");

// let li2 = document.createElement("li");
// li2.textContent = "you can add list1.";

// ul2.insertBefore(li2, ref2);
// console.log(ul2);


// replaceChild()
// const ul3 = document.querySelector(".todo_list");
// const ref3 = ul3.querySelector(".yes");

// const li3 = document.createElement("li");
// li3.textContent = "you can add list1.";

// ul3.replaceChild(li3, ref3);
// console.log(ul3);


// removeChild()
const ul4 = document.querySelector(".todo_list");
const ref4 = ul4.querySelector(".yes");

ul4.removeChild(ref4);
console.log(ul4);