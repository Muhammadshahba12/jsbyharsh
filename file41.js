// (4:34:14- 4:41:12)
// Object destructuring
// const band = {
//     bandName: "Led zeppLin",
//     famousSong: "stairway to heaven"
// };
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// bandName = "queen";
// console.log(bandName, famousSong);



// const band = {
//     bandName: "Led zeppLin",
//     famousSong: "stairway to heaven"
// };
// let bandName = band.bandName;
// let famousSong = band.famousSong;
// bandName = "queen";
// console.log(bandName, famousSong);


//                  destructuring
// const band = {
//     bandName: "Led zeppLin",
//     famousSong: "stairway to heaven"
// };
// let {bandName, famousSong} = band;
// bandName = "queen";
// console.log(`your BandName is: ${bandName}`);
// console.log(`your famousSong is: ${famousSong}`);
// console.log(bandName, famousSong);


// const band = {
//     bandName: "Led zeppLin",
//     famousSong: "stairway to heaven"
// };
// const {bandName, famousSong} = band;
// bandName = "queen";
// console.log(`your BandName is: ${bandName}`);
// console.log(`your famousSong is: ${famousSong}`);
// console.log(bandName, famousSong);



// const band = {
//     bandName: "Led zeppLin",
//     famousSong: "stairway to heaven",
//     year: 1986,
//     anotherFamousSong: "kashmir"
// };
// const {bandName:var1, famousSong:var2} = band;
// // console.log(`your BandName is: ${bandName}`);
// // console.log(`your famousSong is: ${famousSong}`);
// console.log(`your BandName is: ${var1}`);
// console.log(`your famousSong is: ${var2}`);
// // Note:- bandName value store in var1 && bandName is Not defined.



const band = {
    bandName: "Led zeppLin",
    famousSong: "stairway to heaven",
    year: 1986,
    anotherFamousSong: "kashmir"
};
const {bandName:var1, famousSong:var2, ...restProps} = band;
// console.log(bandName);
// console.log(famousSong);
console.log(var1);
console.log(var2);
console.log(restProps);
console.log(restProps.year);
console.log(restProps.anotherFamousSong);