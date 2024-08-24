// (6:02:34- 6:05:52)
// Parameter  Destructuring

// const person = {
//     firstName: "M.Shahbaz",
//     gender: "Male"
// };

// function printDetail(obj){
//      console.log(obj.firstName);
//      console.log(obj.gender);
//      console.log(obj.age);
// }
// printDetail(person);


// const person = {
//     firstName: "M.Shahbaz",
//     gender: "Male",
// };

// function printDetail({firstName, gender, age}){
//      console.log(firstName);
//      console.log(gender);
// }
// printDetail(person);





const person = {
    firstName: "M.Shahbaz",
    gender: "Male",
};

function printDetail({firstName, gender, age}){
     console.log(firstName);
     console.log(gender);
     console.log(age);
}
printDetail(person);



// const person = {
//     firstName: "M.Shahbaz",
//     gender: "Male",
//     age: 29
// };

// function printDetail({firstName, gender, age}){
//      console.log(firstName);
//      console.log(gender);
//      console.log(age);
// }
// printDetail(person);
