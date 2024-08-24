// (8:32:03- 8:38:41)
// optional changes

// const user = {
//     firstName: "harshit",
//     address: {houseNumber:'1234'}
// };
// console.log(user);
// console.log(user.firstName);
// console.log(user.address);
// console.log(user.address.houseNumber);

// hum log chate hn agr object ke property 
// nhi ha tu ye error ke bajay Undefined 
// show kra js ka lya hum log "?" ko istemal 
// kre ga. 
const user = {
    firstName: "harshit",
    // address: {houseNumber:'1234'}
};
console.log(user?.address?.houseNumber);