// (8:55:46- 9:05:02)
// function hello(){
//     console.log("Hello world!");
// } 
// // hello();
// hello.call();


// const user1 = {
//     firstName:"M.Shahbaz",
//     age: 29,
//     about: function(){
//         console.log(`Person name is ${this.firstName} and age is ${this.age}`);
//     }
// };
// user1.about();


// const user1 = {
//     firstName:"M.Shahbaz",
//     age: 34,
//     about: function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// };
// const user2 = {
//     firstName:"M.Dawood",
//     age:45
// };
// user1.about();
// user1.about.call();
// // user1.about.call(user1);
// // user1.about.call(user2);



// const user1 = {
//     firstName:"M.Shahbaz",
//     age: 46,
//     about: function(hobby, favMusic){
//          console.log(`${this.firstName}, ${this.age}, ${hobby}, ${favMusic} `);
//     }
// };
// const user2 = {
//     firstName: "M.Dawood",
//     age: 34
// };
// user1.about.call(user2, "cricket");
// user1.about.call(user2, "cricket", "moazrt");

// user1.about.call(user2, "cricket", "moazrt");
// user1.about.call(user1, "cricket", "moazrt");



// function about(hobby, favMusic){
//     console.log(`${this.firstName}, ${this.age}, ${hobby}, ${favMusic} `);
// }
// const user1 = {
//     firstName:"M.Shahbaz",
//     age: 46,
// };
// const user2 = {
//     firstName: "M.Dawood",
//     age: 34
// };
// // apply
// about.apply(user1,["gardening","gggg"]);
// about.apply(user2,["gardening","gggg"]);

// // bind
// const func = about.bind(user2,"photpgraphy","ghj");
// func();
// const func1 = about.bind(user2,"photpgraphy","ghj");
// func1();

function about(hobby, fav){
    console.log(` ${this.name} ${this.age}  ${hobby} ${fav}`);
}
const user1 = {
    name:"M.Shahbaz",
    age:67,
};
const user2 = {
    name:"Ali",
    age:34
};

// user1.about.call(user2,"j","f");
// about.apply(user2,["g","j"]);
const a = about.bind(user1,"a","j");
a();