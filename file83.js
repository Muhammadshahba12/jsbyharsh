// (10:04:20- 10:17:12)
// new keyword

// constructor function (start with capital letter)
function CreateUser(firstName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}
CreateUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
const user1 = new CreateUser("M.Ali", 56);
console.log(user1);
user1.about();
// new keyword
// 1.) create "empty object"  this={} (this refer kre ga empty objectc ko) 
// 2.) return this ( empty object)
// 3.) Object.create(createUser.prototype) (ye relation "this" se khud ba khud create ho gay ga)