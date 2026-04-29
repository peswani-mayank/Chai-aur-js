//numbers

const score=400; //in this it will automatic detect krlega 
console.log(score);
const balance=new Number(500.098); //isme apn define kr rhe h ki humne number hi chhaiye means hum bta rhe h ki hume number hi lena h or yeh apn number object bna rhe h( ab ye primitive nhi h object h)
console.log(balance);

//ye number type s string m conert hojyega ab iska datatype string dikhayega
console.log(balance.toString());
console.log(typeof(balance)); //apn n uper balance ko number ka object bna rkha h isliye string m convert krne k baad type of object aa rha h

console.log(balance.toString().length); // ab balance string m convert ho chuka h to apn length use kr skte

console.log(balance.toFixed(1)); // ab ye decimal m 1 precision tk value print krega means decimal k baad 1 digit show krega toFixed m apnko jitni digit decimal k baad chahiye apn kr skte h


const balance1=123.8966;
console.log(balance1.toPrecision(4)); //round off krdega 

const balance2=1000000;
console.log(balance2.toLocaleString()) // ye numbers k bich m comma lga dega







// -----------------------****-------------*******--------------------
//maths

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.5))

console.log(Math.ceil(4.5));

console.log(Math.floor(4.5));

console.log(Math.min(4,3,2,6,7));

console.log(Math.random()); // it gives always random values in betqween 0 and 1

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);