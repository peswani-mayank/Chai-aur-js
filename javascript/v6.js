let score=33;
console.log(score); //33
console.log(typeof score); //method 1 to check type of any variable
console.log(typeof(score)); //method 2 to check type of any variable, both methods are same and will give the same output

let a="23";
console.log(a); //23
console.log(typeof a); //string
let b=Number(a); // conversion of string to number 
console.log(typeof b); //number
console.log(b); //23

//ab agar m koi variable m esa likhta hu alphanumeric value us variable ko assign krta hu to or fr usko kisi other dadatype m convert krunga to convert to hojyega but convert krne k baad uski value Nan print hokr aayegi 
let c="23abc";
console.log(c);
let d=Number(c); //conversion of string to number, but since c contains non-numeric characters, it will result in NaN (Not a Number)
console.log(typeof d);
console.log(d); //NaN


let e=null;
console.log(typeof e); //isme null ka daatatype object dikhayega fr usko number m convert krenge to iski jo valuye print hokr aayegi wo zero hogi or convert krne s print krwayege to null print hokr aayega, null ka daatatype object hai but uski value null hai, null ko number m convert krne pe 0 print hokr aayega, ye JavaScript ka ek quirk hai.
console.log(e);
let f=Number(e); //conversion of null to number, which results in 0
console.log(f); //0


let g=undefined;
console.log(typeof g); //undefined
console.log(g); // undefined k case m bi convert krne s phele undefined print hokr aayega, undefined ko number m convert krne pe NaN print hokr aayega, undefined ka daatatype bhi undefined hai, ye bhi JavaScript ka ek quirk hai.
let h=Number(g); //conversion of undefined to number, which results in NaN
console.log(h); //NaN


//short notes
//true->1
//false->0
