console.log(null>0); //output false, because null is not greater than 0
console.log(null==0); //output false, because null is only equal to undefined and not equal to any other value
console.log(null>=0); //output true, because null is considered equal to 0 in this comparison due to type coercion rules in JavaScript. However, this can be confusing and is generally not recommended to rely on such comparisons.


//short notes
//the reason is that an equality check == and comparison > < >= <= work differently;
// comaprison convert null to a number treating it as 0 that's why nul>=0 is true and null>0 is false


console.log(undefined>0); //output false, because undefined is not greater than 0
console.log(undefined==0);
//output false, because undefined is only equal to null and not equal to any other value
console.log(undefined>=0); //output false, because undefined is not greater than or equal to 0