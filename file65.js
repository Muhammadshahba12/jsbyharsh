// (7:46:10- 7:52:20)
//  splice method
//  start , delete , insert

// change original Array
// insert / delete in Array

// const myArray = ['item1','item2','item3'];
// // delete
// // myArray.splice(1,1);

// // insert 
// myArray.splice(2,0,'insertedItem');
// console.log(myArray);


// const myArray = ['item1','item2','item3'];
// const deletedItems = myArray.splice(1,1);
// console.log("Deleted  Items",deletedItems);
// console.log("original array",myArray);

// const myArray = ['item1','item2','item3'];
// const deletedItem = myArray.splice(1,2);
// console.log("Deleted Items", deletedItem);
// console.log("Original Array", myArray);

const myArray = ['item1','item2','item3'];
const deletedItem = myArray.splice(1, 2,"inserted Item1", "inserted Item2");
console.log("Deleted items", deletedItem);
console.log("Original Array", myArray);