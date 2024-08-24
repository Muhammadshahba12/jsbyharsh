// (9:56:12- 10:04:18)

//  Hm ne akk relationship banaya tha 
// "createUser" and "userMethods" ka darmiyan
// agr koi method "createUser" ma nhi tha tu js wo
// "userMethods" ma dakhte hn
// "Object.create" user ke "proto" ko "userMethod" ka equavalent set kr deta tha.
//  koi method "createUser" ma nhi ha tu "userMethods"  ma js ko ml gaya

// const userMethods = {
//     about: function(){
//         return `${this.firstName} ${this.lastName} is ${this.age} years old.`; 
//     },
//     is18: function(){
//         return this.age>=21;
//     },
//     sing: function(){
//         return `tu ja na abb`;
//     }
// }
// function createUser(firstName, lastName, email, age, address ){
//     const user = Object.create(userMethods);
//     user.firstName =firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;

//     return user;
// }
// const user1 = createUser("M.","Umair","sami@gmail.com",22,"h#1 karachi");
// const user2 = createUser("M.","Ali","Ali@gmail.com",56,"Washington");

// console.log( user1.about() );
// console.log( user2.about() );
// console.log( user1);

// console.log(createUser.prototype);



// Jb "createUser" function hme ak object deta ha
// tu hm log "userMethods" alag bna kr space kuu zaya kre.



function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype); // {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;

    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function(){
    return this.age>=18;
};
createUser.prototype.sing = function(){
    return "ti fdd  ggjh";
};
const user1 = createUser("M.","Umair","sami@gmail.com",22,"h#1 karachi");
const user2 = createUser("M.","Ali","Ali@gmail.com",56,"Washington");

console.log(user1);
console.log( user1.sing() );
// console.log( user2.about() );
// console.log( user1);

