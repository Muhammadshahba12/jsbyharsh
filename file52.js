// (5:56:19- 6:02:33)
// Rest parameters

// function myFunc(a,b,c){
//     console.log(`a value is: ${a}`);
//     console.log(`b value is: ${b}`);
//     console.log(`c value is: ${c}`);
// }
// myFunc(31,44,25);



// function myFunc(a,b,c){
//     console.log(`a value is: ${a}`);
//     console.log(`b value is: ${b}`);
//     console.log(`c value is: ${c}`);
// }
// myFunc(31,44,25,66,86,22,12,43);




// function myFunc(a,b,c){
//     console.log(`a value is: ${a}`);
//     console.log(`b value is: ${b}`);
//     console.log(`c value is: ${c}`);
//     console.log(`d value is: ${d}`);
// }
// myFunc(31,44,25);



// function myFunc(a,b,c,d){
//     console.log(`a value is: ${a}`);
//     console.log(`b value is: ${b}`);
//     console.log(`c value is: ${c}`);
//     console.log(`d value is: ${d}`);
// }
// myFunc(31,44,25,66,86,22,12,43);



// function myFunc(a,b,...c){
//     console.log(`a value is: ${a}`);
//     console.log(`b value is: ${b}`);
//     console.log(`c value is: ${c}`);
// }
// myFunc(31,44,25,66,86,22,12,43);


// function myFunc(...numbers){
//     console.log(numbers);
//     console.log( Array.isArray(numbers) );
// }
// myFunc(31,44,25,66,86,22,12,43);


// function myFunc(...numbers){
//     let total = 0;
//     for(let number of numbers ){
//         total = total + number;
//     }
//     console.log(total);
// }
// myFunc(31,44,25,66,86,22,12,43);




function myFunc(a,b,c,...d){
    console.log(`a is : ${a}`);
    console.log(`b is : ${b}`);
    console.log(`c is : ${c}`);
    console.log(`d is : ${d}`);
    let total = 0;
    for(let num of d){
        total = total + num;
    }
    console.log(total);
}
myFunc(3,1,34,68,9,787);