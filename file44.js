// (4:51:20- 5:11:40)
// function

// console.log("Hello world!");

// console.log("Hello world!");



//            Function declaration:-

// function singHappyBirthday(){
//     console.log("Happy Birthday...");
// }
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();





// function twoPlusFour(){
//     return 4+2;
// }
// console.log( twoPlusFour() );
// let a = twoPlusFour();
// console.log(a);



// function sumTwoNum( num1, num2){
//     return num1 + num2;
// } 
// // console.log(undefined+undefined);
// let a = sumTwoNum(5,7);
// console.log(a);


// function sumThreeNum(num1, num2, num3){
//     return num1 + num2 + num3;
// }
// console.log( sumThreeNum(2+3+undefined) );
// const a = sumThreeNum(3,2,7);
// console.log(a);


// Find enter digit is Even/Odd 
// if yes return true else false
// function isEven(num){
//     if( num%2===0 ){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(1));



// function isEven(num){
//     if(num%2===0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(7));



// function isEven(num){
//     return num%2===0;
// }
// console.log(isEven(11));



// function
// input:  string 
// output: firstCharacter

// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("M.Shahbaz"));


// function
// input:  array, target (number)
// output: index of target if present in array
function findTarget(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
let myArr = [1,52,35,44,55,66,77,88,99];
let ab = findTarget(myArr, 8);
console.log(ab);