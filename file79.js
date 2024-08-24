// (9:28:46- 9:30:20)
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
    const user = {};
    user.firstName =firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;

    return user;
}
const user1 = createUser("M.","Sami","sami@gmail.com",22,"h#1 karachi");
const user2 = createUser("M.","Ali","Ali@gmail.com",56,"Washington");

console.log( user1.about() );
console.log( user1.sing() );

// Problem
// Hm ne ak method "userMethods" ma declair kr dea
// ha mgr hm log "createUser" ma likhna bhool
// gay hn abb "error" age ga.