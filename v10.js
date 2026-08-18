//Strings

//m1
const name="mayank peswani";
console.log(name);

const age=20;
console.log(`My name is ${name} and my age is ${age}`);
console.log(name[0]);

console.log(name.length);

console.log(name.toLowerCase());

console.log(name.toUpperCase());

console.log(name.charAt(2));

console.log(name.indexOf('a'));

//substring

const name1=name.substring(0,3);
console.log(name1)

//slice :in this we can give negative values also if we provide negative then it will give reverse character according to number 
const name2=name.slice(0,4);
console.log(name2);

//trim: it removes the extera spaces 
const name3="     mayank    ";
console.log(name3);
console.log(name3.trim());

//replace:
const url="https://mayank.com/mayank%20peswani"
console.log(url.replace('%20','-'));
console.log(url.includes('mayank'))
console.log(url.includes('abhishek'))

//split


//m2

const MyName=new String('Mayank');
console.log(MyName);