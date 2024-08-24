// (3:46:48- 3:56:45)
// Array destructuring

// problem: if we want to store value make many variables... it is dufficult
// const myArray = ["val1","val2","val3","val4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("Value of myvar1", myVar1);
// console.log("value of myvar2", myVar2);

// solution:  Array destructuring
// const myArray = ["val1","val2","val3","val4"]; 
// let [myVar1, myVar2] = myArray;
// console.log("value of myVar1 is: ",myVar1);
// console.log("value of myvar2 is: ",myVar2);




// Scenario-I:
// const myArray = ["val1","val2","val3"]; 
// let [myVar1, myVar2, myVar3] = myArray;
//     myVar1 = "vallllllls";
// console.log("value of myVar1 is: ",myVar1);
// console.log("value of myvar2 is: ",myVar2);




// Scenario-II:
// const myArray = ["val1"]; 
// let [myVar1, myVar2, myVar3] = myArray;
// console.log("value of myVar1 is: ",myVar1);
// console.log("value of myvar2 is: ",myVar2);
// console.log("value if myVar3 is: ", myVar3);

// Scenario-III:
// const myArray = ["val1","val2","val3"]; 
// let [myVar1, myVar2, myVar3] = myArray;
// console.log("value of myVar1 is: ",myVar1);
// console.log("value of myvar2 is: ",myVar2);


//  Scenario-IV:
// const myArray = ["val1","val2","val3","val4"]; 
// let [myVar1, myVar2] = myArray;
// let myNewArray = myArray.slice(2);
// console.log(myVar1);
// console.log(myVar2);
// console.log(myNewArray);

// OR:-
const myArray = ["val1","val2","val3","val4","val5"];
let [myVar1, myVar2, ...newArray] = myArray;
console.log(myVar1);
console.log(myVar2);
console.log(newArray);