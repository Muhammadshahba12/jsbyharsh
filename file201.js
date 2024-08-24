// setTimeout() 
// clearTimeout()
// setInterval()
// clearInterval()
           
           
           
           // setTimeout() :-
// console.log("script start...");

// let count = 0;
// function h(){
//     // let count = 0;
//     console.log("Hello world!"+ count);
//     count++;
// }
// let id = setTimeout(h,100);


// let sum = 0;
// for(let i=0; i<1000; i++){
//     sum +=i;
// }
// console.log(sum);


// console.log("setTimeout will not run");
// clearTimeout(id);
// console.log("script end...");



            //   setInterval() :-
const id = setInterval(()=>{
    let red = Math.floor( Math.random()*256);
    let green = Math.floor( Math.random()*256);
    let blue = Math.floor( Math.random()*256);
    let rgb = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.backgroundColor = a;
    btn.style.color = a;
},1000);