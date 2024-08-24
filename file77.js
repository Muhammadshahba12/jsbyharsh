// (9:13:25- 9:22:35)
// function create multiple objects

// const user1 = {
//     firstName:"M.Shahbaz",
//     email:"shahbaz9009@gmail.com",
//     age:22,
//     address:"H#25,B#5, Mughalpura Lahore",
//     about: function(){
//         return `My name is ${this.firstName} ${this.age} years old.`;
//     },
//     is18: function(){
//         return this.age >=18;
//     }
// };
// const aboutUser = user1.about();
// console.log(aboutUser);
// // console.log(user1.is18());


//  PROBLEM:
// ye tu srf ak user1 ha agr iss trha ka 
// 1crore user ho ga tu phr

//  SOLUTION:
// function (that function create object)
// add key value pair
// Object ko return krega
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about= function(){
       return ` ${this.firstName} is ${this.age} years old`;
    };
    user.is18 =  function(){
        return this.age>=18;
    }
    return user;
} 
const user1 = createUser("M.","Shahbaz","khan900@gmail.com",49,"H#4, B#46");
console.log(user1);
const user2 = createUser("M.","Danish","Danish00@gmail.com",4,"H#4, B#46");
console.log(user2);
const is181 = user1.is18();
console.log(is181);
const is182 = user2.is18();
console.log(is182);
console.log(user1.about());

// PROBLEM:-
// 
