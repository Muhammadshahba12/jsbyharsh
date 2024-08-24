// consume promise using async await



// const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//     .then( response=>{
//         return response.json();
//     })
//     .then( data=>{
//         console.log(data);
//     })


        //    consume promise using async await


//  "async" always return promise

console.log("script start");
const url = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts(){
//     const response = await fetch(url);
//     if(!response.ok){
//         throw new Error("something went wrong!!!");
//     }
//     const data = await response.json();
//     return data;
//     // console.log(data);
// }

//  arrow function
const getPosts = async()=>{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("something went wrong!!!");
    }
    const data = await response.json();
    return data;
}

getPosts()
    .then( myData=>{
        console.log(myData);
    })
    // run when no internet
    .catch( error=>{
        console.log(error);
    })   
// console.log(getPosts() );
console.log("script end");