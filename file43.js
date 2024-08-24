// (4:46:08- 4:51:07)

//Nested destructuring 
const users = [
    { userId:1, name:"M.Ali", gender:"Male"},
    { userId:2, name:"M.Sami", gender:"Male"},
    { userId:3, name:"Eram", gender:"Female"},
    { userId:4, name:"M.Shahbaz", gender:"Male"},
    { userId:5, name:"M.Danish", gender:"Male"}
];

// const [ user1, user2, user3, user4, user5] = users;
// console.log(user1);

// const [ {userId}, , {gender}] = users;
// console.log(userId);
// console.log(gender);


// const [ {userId: id}, , {gender: userGender}] = users;
// // console.log(userId);
// // console.log(gender);
// console.log(id);
// console.log(userGender);


// const [ {userId: id, name ,gender}, , {gender: userGender}] = users;
// // console.log(userId);
// // console.log(gender);
// console.log(id);
// console.log(name);
// console.log(gender);
// console.log(userGender);


const [{userId:u1id, name:u1name, gender:u1gender},{userId:u2id, name:u2name, gender:u2gender},{userId:u3id, name:u3name, gender: u3gender}] = users;
console.log(u1id);
console.log(u1name);
console.log(u1gender);
console.log(u2id);
console.log(u2name);
console.log(u2gender);
console.log(u3id);
console.log(u3name);
console.log(u3gender);


// console.log(user2);
// console.log(user1);