                  // Date Methods:-
// toDateString()
// getDay() 
// getDate() 
// getMonth() 
// getFullYear() 

// getHours()
// getMinutes()
// getSeconds()
// getMilliseconds()

const date = new Date();

console.log(date);
console.log(date.toDateString() );

console.log("...............Day.............");
const d = ["sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
console.log(d[date.getDay()]);

console.log("...............Date.............");
console.log("Date: ",date.getDate());
const mon = ["January","February","March","April","May"];
console.log("Month: ",mon[date.getMonth()] );
console.log("Year: ",date.getFullYear());

console.log("...............Time..............");
console.log("Hours: ",date.getHours());
console.log("Minutes: ", date.getMinutes());
console.log("Seconds: ", date.getSeconds());
console.log("Millideconds: ", date.getMilliseconds());
console.log("...........................................................................");

const obj = new Date();

console.log("........................set Date.............");
const sd = obj.setDate(29); 
console.log("set date 29: ", sd, obj.getDate());

const sm = obj.setMonth(4);
console.log("set month May:", sm, obj.getMonth());  

const sy = obj.setFullYear(2025, 4, 29);
console.log("set year 2025:", sy, obj.toDateString());


console.log(".........................set Time.............");
const sh = obj.setHours(15);
console.log("set hrs 15:", sh, obj.getHours() );

const smm = obj.setMinutes(30);
console.log("Set minutes 30: ", smm, obj.getMinutes());

const ss = obj.setSeconds(59);
console.log("set Seconds 59: ", ss, obj.getSeconds());

const mss = obj.setMilliseconds(776);
console.log("set milliseconds 776: ", mss,  obj.getMilliseconds());



console.log("...........................................................................");
const yu = new Date("june 30 2024 01:15:00"); 
// const syy = obj.setFullYear(2025, 4, 29, 12,12,12);
// console.log("set year 2025:", syy, obj.toDateString());

console.log( yu.getSeconds() );