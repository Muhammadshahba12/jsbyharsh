// (9:05:51- 9:08:55)

const user1 = {
    firstName: "M.Shahbaz",
    age: 8,
    about: function(){
        console.log( this.firstName, this.age);
    }
};
// don't do this mistakes

// const myFunc = user1.about;
// myFunc();



const user12 = {
    firstName: "M.Shahbaz",
    age: 8,
    about: function(){
        console.log( this);
        console.log( this.firstName, this.age);
    }
};
// don't do this mistakes

const myFunc = user12.about;
myFunc();
//  because 
// const user2 = function(){
//     console.log( this);
//     console.log( this.firstName, this.age);
// }

// here "this" is window object that's why when you do
// const fun = user2.about;
// fun();
// it will show error