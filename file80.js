// (9:30:40- 9:45:54)

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };
// const obj2 = {
//     key3: "value3"
// };
// //  console.log(obj1.key1);
// //  console.log(obj1.key2);
// //  console.log(obj2.key3);
//  console.log(obj2.key1);


// problem
//  ma cha ta hn jo  key obj2 me nhi ha wo
// bhi ma print(access) krwa saku.


// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };
//  const obj2 = {};
//  obj2.key3 = "value3";
// console.log(obj2.key3);


// // There is another way to create empty object 
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };
// const obj2 = Object.create(obj1); // {}
// //  obj2 ke [[prototype]] ma obj1 ko set kre ga.
//  obj2.key3 = "value3";
//  obj2.key2 = "unique";
// //  console.log(obj2.key3);
// //  console.log(obj2.key2);
// //  console.log(obj2.key1);
//  console.log(obj2);
//  console.log(obj2.__proto__);

//  Official ecmaScript documentation [[prototype]]
//  _ _proto_ _ , [[prototype]]  (both are equal)
//  "__proto__" (chain create krta ha, ak reference ha)
//  but "prototype" (ye Function me hoti ha)is different
//  "prototype" is object which provided by "function" 

// Solution
const userMethods = {
    about: function(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`; 
    },
    is18: function(){
        return this.age>=21;
    },
    sing: function(){
        return `tu ja na abb`;
    }
}
function createUser(firstName, lastName, email, age, address ){
    const user = Object.create(userMethods);
    user.firstName =firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;

    return user;
}
const user1 = createUser("M.","Umair","sami@gmail.com",22,"h#1 karachi");
const user2 = createUser("M.","Ali","Ali@gmail.com",56,"Washington");

console.log( user1.about() );
// proto create bond b/w user1 and userMethod. 
console.log( user2.about() );
console.log( user1);