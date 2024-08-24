// (10:17:15- 10:19:34)
// hasOwnProperty()
function CreateUser(firstName, lastName, age, email, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}
CreateUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
CreateUser.prototype.is18 = function(){
    return this.age>=18;
};
CreateUser.prototype.sing = function(){
    return "ti fdd  ggjh";
};
const user1 = new CreateUser("M.Ali", 56);
for(let key in user1){
    
    // print only user1 properties 
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
    
    // print all property of "user1" & "prototype" 
    // console.log(key);
}