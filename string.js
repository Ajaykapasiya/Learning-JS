// learn string all method because it is very useful in web dev. 
// jvceirjcnirnc


const name = "ajay"

const repoCount = 10

// old fashion //console.log(name +  repoCount + "value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount} `);


const gameName = new String ('AJAY')

// key value pair access
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('J'));

// divide into substring
const newString = gameName.substring(0,2)
console.log(newString);

// used the negative value in slice
const anotherString = gameName.slice(-3,2)
console.log(anotherString);


const newStringOne = "    ajay     "
console.log(newStringOne);

//remove extra space
console.log(newStringOne.trim());

// replace url

const url = "http://ajay.com/ajay%10gujjar"
console.log(url.replace('%10' , '-'));
// include tell the particular word  present in the string or not , it give o/p in bool value. 
console.log(url.includes('ajay'));