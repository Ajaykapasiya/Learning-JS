// Array

const myArr = [0,1,2,3,4,5,6]
//myArr.push(7)
//myArr.unshift(9)
//myArr.shift()
console.log(myArr.includes(8)); // The element to search for.Determines whether an array includes a certain element, returning true or false as appropriate.

const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(typeof newArr);

// slice , splice

console.log("A" ,  myArr);

const myn1 = myArr.slice(0,4) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array
console.log(myn1);

console.log("B" , myArr); 

const myn2 = myArr.splice(0,4)
console.log(myn2);

console.log(myArr);//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements








