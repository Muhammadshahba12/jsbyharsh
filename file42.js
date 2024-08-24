// (4:42:14- 4:46:07)

// object inside array
// very useful in real world application

const users = [
    { userId:1, name:"M.Ali", gender:"Male"},
    { userId:2, name:"M.Sami", gender:"Male"},
    { userId:3, name:"Eram", gender:"Female"},
    { userId:4, name:"M.Shahbaz", gender:"Male"},
    { userId:5, name:"M.Danish", gender:"Male"}
];
// console.log(users);
for(let user of users){
    console.log(user.name);
}