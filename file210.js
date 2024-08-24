// const url = "https://jsonplaceholder.typicode.com/postss";

// // console.log( fetch(url) );

// fetch(url)
//    .then( response =>{
//         // console.log(response);
//         // console.log(response.json());
//         if(response.ok){
//             return response.json();
//         }
//         else{
//             throw new Error("something went wrong!!!");
//         }
//    })
//    .then( data=>{
//         console.log(data);
//    })
//    .catch( error=>{
//         console.log("inside catch");
//         console.log(error);
//    });

                //   post method
const url = "https://jsonplaceholder.typicode.com/postss";

fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        header: {
            'content-type': 'application/json; charset = UTF-8',
        },
    })
    .then( response =>{
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error("something went wrong!!!");
        }
    })
    .then( data=>{
        console.log(data);
    })
    //run when no Internet connection    
    .catch( error=>{
        console.log("inside catch");
        console.log(error);
    });