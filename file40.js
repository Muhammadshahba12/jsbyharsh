// (4:23:14- 4:34:00)
// spread operator

// const array1 = [1,2,3]; 
// const array2 = [4,5,6];
// const newArray1 = [...array1, ...array2];
// const newArray2 = [...array1,...array2, 89,90];
// const newArray3 = [...array1,array2];

// console.log(newArray1);
// console.log(newArray2);
// console.log(newArray3);

// const newArray1 = ["abc"];
// const newArray2 = [..."abc"]
// console.log(newArray1);
// console.log(newArray2);

// const newArray1 = ["12345"];
// const newArray2 = [..."12345"]
// console.log(newArray1);
// console.log(newArray2);


// spread operator in object
// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//     key1: "value55"
// };
// console.log(obj1);





// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// };

// const obj2 = {
//     key3: "value3",
//     key4: "value4"
// };
// const newObj = {...obj1, ...obj2};
// console.log(newObj);




// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// };

// const obj2 = {
//     key1: "uniqueValue",
//     key3: "value3",
//     key4: "value4"
// };
// // const newObj = {...obj1, ...obj2};
// // const newObj = {...obj2, ...obj1};
// const newObj = {...obj2, ...obj1, key55:"value55"};
// console.log(newObj);




const newObj1 ={..."abcdefghijklmnopqrstuvuxyz"}; 
const newObj2 ={...["item1","item2"]};
console.log(newObj1);
console.log(newObj2);