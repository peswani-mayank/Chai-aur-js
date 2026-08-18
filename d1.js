const marvel_heroes=["Iron Man","thor","spiderman"]
const dc_heroes=["batman","superman","flash"]
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);


//ese push krne s array  k andar dc_heroes ka array as a single element add ho jata hai. Iska matlab hai ke marvel_heroes array ab 4 elements ka hoga: "Iron Man", "thor", "spiderman", and the entire dc_heroes array as the fourth element. If you want to add the elements of dc_heroes individually to marvel_heroes, you can use the spread operator or the concat method. Here's how you can do it:
const newarr=marvel_heroes.concat(dc_heroes);
console.log(newarr);

//concat is store in new array  

//another way to add the elements of dc_heroes individually to marvel_heroes is by using the spread operator. Here's how you can do it:
const newarr2=[...marvel_heroes,...dc_heroes];
console.log(newarr2);