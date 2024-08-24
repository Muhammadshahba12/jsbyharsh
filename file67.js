// (7:57:18- 8:11:11)
// sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranted
// unique items only (no duplication allowed)

// const numbers = new Set([1,2,3]);
// console.log(numbers);
// console.log(numbers[2]);


// const numbers = new Set("abc");
// console.log(numbers);


// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(2);
// console.log(numbers);

// const items = ['items1','iem2','item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(items);
// console.log(numbers);


// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(['item1','item2']);
// numbers.add(['item3','item4']);
// console.log(numbers);


// const items = ['item1','item2','item3'];
// const numbers = new Set(); 
// numbers.add(1);
// numbers.add(2);
// numbers.add(2);
// numbers.add(items);
// numbers.add(items);

// if(numbers.has(1)){
//     console.log("1 is present");
// }
// else{
//     console.log("1 is not present");
// }
// console.log(numbers);



// const items = ['item1','item2','item3'];
// const numbers = new Set();
// numbers.add(2);
// numbers.add(3);
// numbers.add(items);

// if(numbers.has(1)){
//     console.log("1 is present");
// }
// else{
//     console.log("1 is not present");
// }
// console.log(numbers);


// const items = ['item1','item2','item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);

// console.log(numbers);
// for(let num of numbers){
//     console.log(num);
// }



// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// console.log(myArray);
// console.log(uniqueElements.length);
// console.log(uniqueElements);


const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
 let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);