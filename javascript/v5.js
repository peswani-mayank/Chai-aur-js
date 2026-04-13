// // Type	Description
// String	A text of characters enclosed in quotes
// Number	A number representing a mathematical value
// Bigint	A number representing a large integer
// Boolean	A data type representing true or false
// Object	A collection of key-value pairs of data
// Undefined	A primitive variable with no assigned value
// Null	A primitive value representing object absence
// Symbol	A unique and primitive identifier

//The typeof operator returns the type of a variable or an expression:

let name="Mayank Peswani"; //string type
let age=18; //number type
let isStudent=true; //boolean type
let address=null; //null type
let phoneNumber=1234567890n; //bigint type
let email; //undefined type
let person={name:"Mayank",age:18}; //object type
let uniqueId=Symbol("id"); //symbol type    
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isStudent); //boolean
console.log(typeof address);            
console.log(typeof phoneNumber); //bigint
console.log(typeof email);
console.log(typeof person); //object
console.log(typeof uniqueId); //symbol

console.log(typeof null); //object (this is a known bug in JavaScript, null is actually a primitive type, but typeof returns "object") 