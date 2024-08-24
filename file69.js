// (8:29:11- 8:32:01)
// clone using object.assign
// memory

// const obj = {
//     key1:"value1",
//     key2:"value2"
// };
// const obj2 = obj;
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);


// const obj = {
//     key1:"vallue1",
//     key2:"value2"
// };
// const obj2 = {...obj};
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);


const obj = {
    key1:"value1",
    key2:"value2"
};
// const obj2 = {...obj}; // previous way of clone
const obj2 = Object.assign({},obj); // New way of clone
obj.key3 = "value3";
console.log(obj);
console.log(obj2);