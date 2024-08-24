// ( 1:55:51 - 2:02:38)
// Nested if - else

//  winning Number  19

// 19 your guess is right
// 17 too Low
// 20 too High

let winningNumber = 19;
let userGuess = +prompt("Guess Number");
// console.log(typeof userGuess);
if(winningNumber === userGuess){
     console.log("You won, your Guess is right");
}
else{
    if( winningNumber< userGuess){
        console.log("too High");
    }
    else{
        console.log("too Low");
    }
}


// console.log(typeof userGuess, userGuess);

// let winningNumber = 19;
// let userGuess = +prompt("Guess Number");
// if( winningNumber === userGuess){
//     console.log("You won");
// }
// else if(winningNumber < userGuess){
//     console.log("too High");
// }
// else{
//     console.log("too Low");  
// } 