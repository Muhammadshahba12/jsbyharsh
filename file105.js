// createElement()
// createTextNode()
// textContent
// append()
// prepend()
// remove()
// before()
// after()


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//       <ul class="todo-list">
//             <li>Todo list1</li>
//             <li>Todo list2</li>
//       </ul>
// </body>  


const todo = document.querySelector(".todo-list");


            // How to add element: 1st method
// todo.innerHTML += "<li>Todoo list 3</li>";
// todo.innerHTML +="<li>Todo list 4</li>";


const ele = document.createElement("li");
            //How to add element: 2nd method:-
const text = document.createTextNode("yes, you are eligible!");
ele.append(text);
todo.append(ele);

            //How to add element: 3rd method:-
ele.textContent = "yes, your elglish is improving day by day.";
todo.append(ele);


//  append(), prepend() 
const li2 = document.createElement("li");
const textNode2 = document.createTextNode("I 'm excited to learn Arabic");
li2.append(textNode2);
todo.prepend(li2);

//  remove()
const li4 = document.createElement("li");
li4.textContent = "learn punjabi";
todo.append(li4);
li4.setAttribute("class","yes");
document.querySelector(".yes").remove();


// before(), after()
const h1 = document.createElement("h1");
h1.textContent = "I'm above todo list";
todo.before(h1);

const h3 = document.createElement("h3");
h3.textContent = "I' m below todo-list.";
todo.after(h3);