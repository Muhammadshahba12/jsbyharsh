//  DOM Traversing


// getRootNode() 
// childNodes          :- Also  Give text nodes of child
// children            :- Ignore text nodes of child
// parentNode 
// parentElement
// nextSibling         :- Also  Give text nodes of sibling
// nextElementSibling  :- Ignore text nodes of sibling
// previousSibling
// previousElementSibling



/* <html lang="en">
    <head>
          <title>Dom Traversing</title>
          <script src="112practice.js" defer></script>
    </head>
    <body>
         <div class="container section-todo">
             <h1>My heading</h1>
             <p>Some useful information</p>  
         </div>
    <body>
</html>  */


      //             DOM Traversing
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[1];
// console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
// console.log(htmlElementNode.children); HTMLCollection(2) [head, body]

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode.parentNode);

// sibling :-
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextElementSibling); //ignore "text Nodes"


// const h1 = document.querySelector("h1");
// const div = h1.parentElement;
// const body = div.parentElement;
// div.style.backgroundColor = "#333";
// div.style.color = "#efefef";
// body.style.backgroundColor = "green";
// body.style.color = "pink";


// const body = document.body;
// console.log(body);


// const head = document.querySelector("head");
// const title = head.querySelector("title");
// console.log(title.childNodes);


// children (ignore "textNode")
const container = document.querySelector(".container");
console.log(container.childNodes);
console.log(container.children);