// (4:18:22- 4:23:12)
// Computed properties

//                Assignment #01
// Output Needed:- 
// const obj = {
//     objKey1: "myValue1",
//     objKey2: "myValues2"
// }; 

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2"; 

// const obj = {
//     key1: value1,
//     key2: value2
// };
// console.log(obj);

const obj = {
    [key1]: value1,
    [key2]: value2
};
console.log(obj);

// OR

const obj1 = {};
obj1[key1] = value1;
obj1[key2] = value2;
console.log(obj1);