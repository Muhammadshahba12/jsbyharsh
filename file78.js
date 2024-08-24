// (9:22:36- 9:28:35)

const userMethods = {
    about: function(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`; 
    },
    is18: function(){
        return this.age>=21;
    }
}
function createUser(firstName, lastName, email, age, address ){
    const user = {};
    user.firstName =firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    return user;
}
const user1 = createUser("M.","Sami","sami@gmail.com",22,"h#1 karachi");
const user2 = createUser("M.","Ali","Ali@gmail.com",56,"Washington");

console.log( user1.about() );
console.log( user2.about() );