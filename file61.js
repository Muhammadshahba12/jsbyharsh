// (7:26:31- 7:33:01)
// find method

// const isLength = (string)=>{
//     return string.length===3;
// }
// console.log(isLength("cat"));
// console.log(isLength("elephant"));
// console.log(isLength("dog"));


// const myArray = ["Hello","cat","dog","Lion"];
// function isLength3(string){
//     return string.length===3;
// }
// const ans = myArray.find(isLength3);
// console.log(ans);


//  const myArray = ["Hello","catt","doggy","Lion"];
// function isLength3(string){
//      return string.length===3;
// };
// const ans = myArray.find(isLength3);
// console.log(ans);


// const myArray = ["Hello","dog","cat","Lion"];
// const ans = myArray.find((string)=> string.length===3);
// console.log(ans);


const users = [
    {userId:1, userName:"M.Shahbaz"},
    {userId:2, userName:"M.Danish"},
    {userId:3, userName:"M.Dawood"}
]; 
const myUser = users.find( user=> user.userId===3);
// const myUser = users.find((user)=>{
//     return user.userId===3;
// });
console.log(myUser);