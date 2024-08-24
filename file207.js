// xhr practice and error Handling

// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET",url);

// xhr.onload = function(){
//     if(xhr.status >=200 && xhr.status <300){
//         const data = JSON.parse(xhr.response);
//         console.log(typeof data, data);

//         // const fourth = data[3].id;
//         // console.log(fourth);
//     }
//     else{
//         console.log("Something went wrong!!!");
//     }
// }

// xhr.send();



const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", url);

// xhr.onreadystatechange = function(){
//      if(xhr.readyState===4){
//         console.log( JSON.parse(xhr.response));
//      }
// }

xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        const data = JSON.parse( xhr.response);
        console.log(data);

        // console.log(data[4]);
        const xhr2 = new XMLHttpRequest();
         
        const id = data[4].id;
        const url2 = `${url}/${id}`;
    
        xhr2.open("GET", url2);
          xhr2.onload  = function(){
              console.log( JSON.parse(xhr2.response) );
          }
        xhr2.send();

    }
}

xhr.onerror = function(){
    console.log("something went wrong!");
}

xhr.send();








xhr.onload = function(){
    // const data = JSON.parse(xhr.response);
    // console.log(typeof data, data);

         // Error handling:---
    if(xhr.status >=200 && xhr.status < 300){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
    }
    else{
        console.log("someting went wrong");
    }
}

// when Network Error occur
xhr.onerror = function(){
    console.log("Network error...");
}
        
xhr.send();