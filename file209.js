// xhr using promise

const url = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise( (resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                // const data = JSON.parse(xhr.response);
                // console.log(data);
                resolve(xhr.response);
            }
            else{
                // console.log(new Error("something went wrong..."));
                reject(new Error("something went wrong..."));
            }
        }
        
        xhr.onerror = function(){
            console.log(new Error("something went wrong..."));
        }
        xhr.send();
    });
}

sendRequest("GET", url)
   .then( response=>{
       const data = JSON.parse(response);
       //  console.log(data);
       return data;
   })
   // chaining
   .then( data=>{
       //  console.log(data[4]);
       //  console.log(data[4].id);
       const id = data[4].id;
       return id;
   })
//    .then( id=>{
//        const url = "https://jsonplaceholder.typicode.com/posts";
//        const xhr2 = new XMLHttpRequest();

//        const url2 = `${url}/${id}`;
//        xhr2.open("GET", url2);
//         xhr2.onload = function(){
//             if(xhr2.status>=200  && xhr2.status<300){
//                 console.log( JSON.parse(xhr2.response));
//             }
//         }
//        xhr2.send();
//    })

// or:-
   .then( id=>{
        const url2 = `${url}/${id}`;
        return sendRequest("GET", url2);
   })
   .then( newResponse=>{
        //  console.log( newResponse);
         console.log( JSON.parse(newResponse));

   })
   .catch( error=>{
        console.log(error);
   })
