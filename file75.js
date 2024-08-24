// (9:08:56- 9:12:17)
// Arrow function

// const user1 = {
//     firstName: "M.Shahbaz",
//     age:56,
//     about: ()=>{
//         console.log(this.firstName, this.age);
//     }
// };
// user1.about();
// user1.about.call(user1);

const user1 = {
    firstName: "M.Shahbaz",
    age:56,
    about: ()=>{
        console.log(this);
        console.log(this.firstName, this.age);
    }
};
user1.about.call(user1);






