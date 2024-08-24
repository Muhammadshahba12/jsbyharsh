// (5:16:27- 5:24:40)
// Arrow function

const singHappyBirthday = ()=>{
    console.log("Happy Birthday...");
}
singHappyBirthday();



// const sumTwoNumber = (num1, num2)=>{
//     return num1 + num2;
// }
// console.log( sumTwoNumber(10,2) );



// const sumThreeNum = (num1, num2, num3)=>{
//     return num1 + num2 + num3;
// }
// console.log( sumThreeNum(2,6,4) );


// const isEven = (num)=>{
//     return (num%2===0);
// }
// console.log( isEven(2) );

// const isEven = num => num%2===0;
// console.log( isEven(4) );


// const firstChar = (anyString)=>{
//     return anyString[0];
// }
// console.log( firstChar("M.Shahbaz") );


const finalTarget  = (myArray, target)=>{
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i]===target){
            return i;
        }
    }
    return -1;
}
let array = [16,25,32,41,59];
console.log(finalTarget(array, 59));