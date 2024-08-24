// (5:11:43- 5:24:42)
// function expression

// when we store function in a variable/constant
// it is called function expression

// const singHapppBirthday = function(){
//     console.log("Happy Birthday");
// }
// singHapppBirthday();


// const twoPlusFour = function(){
//     return 2+4;
// }
// console.log( twoPlusFour() );


// const sumTwoNum = function(num1, num2){
//     return num1 + num2;
// }
// console.log( sumTwoNum(2,10) );


// const sumThreeNum = function(num1, num2, num3){
//     return num1 + num2 + num3;
// }
// console.log( sumThreeNum(2,4,6));


// const isEven = function(num){
//     return (num%2===0);
// }
// console.log( isEven(12) );



// function
// input:  array, target (number)
// output: index of target if present in array
const findTarget = function(myArr, target){
     for(let i=0; i<myArr.length; i++){
        if(myArr[i]===target){
            return i;
        }
     } 
     return -1;
}
let array = [2,4,5];
console.log( findTarget(array, 5));