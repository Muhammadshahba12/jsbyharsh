// ( 1:00:40 - 1:09:00)

// trim()
// toUpperCase()
// toLowerCase()
// slice()

//string is  Immutable it's mean any method
// does not effect on Original string

// trim()
// var firstName = "       M.Sha h b  az   ";
// console.log(firstName);
// var newString =  firstName.trim();
// console.log(newString);
// console.log(firstName.trim());
// console.log(firstName);

// toUpperCase()
// var firstName = "M.shahbaz";
// console.log(firstName);
// var newString = firstName.toUpperCase();
// console.log( newString );

// toLowerCase()
// var firstName = "M.SHAHBAZ";
// console.log(firstName);
// var newString = firstName.toLowerCase();
// console.log( newString );

// slice() => Give us particular character from string
//  M  .  S  h  a  h  b  a  z
//  0  1  2  3  4  5  6  7  8 
// slice(start_index, end_index) 
var firstName = "M.Shahbaz";
var newString = firstName.slice(0,5);
console.log( firstName.slice(0) ); // (given_index, to_end_of_string)
console.log(newString); 
console.log(firstName.slice(0,3) );
console.log(firstName);


