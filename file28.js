// (3:00:03 - 3:16:28)
// primitive vs Reference data types


// Premitive data type
// let num1 = 6;
// let num2 = num1;
// console.log("Num1 value is: ", num1);
// console.log("Num2 value is: ", num2);
// num1++;
// console.log("After num1 incremented");
// console.log("Num1 value is: ", num1);
// console.log("Num2 value is: ", num2);

// Reference data type
let array1 = ["item1", "item2", "item3"];
let array2 = array1;
console.log("Array1 elements are: ",array1);
console.log("Array2 elements are: ", array2);
array1.push("item4");
array1.push("item5");
console.log("After pushing elements are to Array1:- ");
console.log("Array1 elements are: ", array1);
console.log("Array2 elements are: ", array2);