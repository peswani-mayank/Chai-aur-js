//string and number confusion
console.log(1); //output 1
console.log("1"); //output 1
console.log("1"+2); //output 12
console.log(1+"2"); //output 12
console.log("1"+2+2); //output 122, because when we add a number to a string, the number is converted to a string and concatenated. So "1"+2 becomes "12", and then "12"+2 becomes "122".
console.log(1+2+"2"); //output 32 because when we add two numbers, they are added together first, and then the result is concatenated with the string. So 1+2 becomes 3, and then 3+"2" becomes "32".

console.log(true); //output true
console.log(false); //output false\
console.log(+true); //output 1, because when we use the unary plus operator on a boolean value, it converts true to 1 and false to 0.
console.log(+false); //output 0, because when we use the unary plus operator on a boolean value, it converts true to 1 and false to 0.



