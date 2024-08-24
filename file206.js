//  xhr ( XMLHttpRequest)



// The XMLHttpRequest.readyState property returns the state an 
// XMLHttpRequest client is in. An XHR client exists in one of the following states:

// Value	State	            Description

// 0	    UNSENT	            Client has been created. open() not called yet.
// 1	    OPENED	            open() has been called.
// 2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	    LOADING	            Downloading; responseText holds partial data.
// 4	    DONE	            The operation is complete.



// imp methods:- 
//  onload, onreadystatechange, status, response, readyState, responseText

// Json vs js object
// json me key ko bhi hm log double quotes "" ma likhte hn.
// json ma methods nhi hote.



// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET", url);

// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
// } 

// xhr.send();



const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr.readyState);
xhr.open("GET", url);
// console.log(xhr.readyState);

         // readyState ke value 0,1,2,3,4 hote ha...jese he state change ho ge(agr 0-1 bhi hui) tu ye chaal pre ga
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr.response);
//         // console.log(typeof xhr.response);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data);
//         // for(let user of data){
//         //    console.log(user.body);
//         // }
//     }
// }


        //  readyState ke value jb 4 ho ge tb "onload" run ho ga 
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

// when Error occur
xhr.onerror = function(){
    console.log("Network error...");
}
        
xhr.send();



// There are five classes defined by the standard:
// 1xx: informational response – the request was received, continuing process
// 2xx: successful – the request was successfully received, understood, and accepted
// 3xx: redirection – further action needs to be taken in order to complete the request
// 4xx: client error – the request contains bad syntax or cannot be fulfilled
// 5xx: server error – the server failed to fulfil an apparently valid request