const accountId =123456;
let accountEmail="mayank2gmail.com";
var accountPassword="12345";
accountCity="sikar"; // we can do like this also without using let,const,var but not preferable


//accountId=78910; //TypeError: Assignment to constant variable.
//const:
//. cannot be redeclared,reassigned
//.variables defined with const have block scope
//.const variables must be initialized at the time of declaration

//let:
//. cannot be redeclared
//. can be reassigned
//. variables defined with let have block scope
//must be declared before use otherwise it will show the value of that variable as undefined 

//var:
//. can be redeclared
//. can be reassigned
//. variables defined with var do not have block scope

//prefer not use var because of issues of block scope and function scope, prefer to use let and const
console.log(accountId);