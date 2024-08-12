// Array

const myArr = [0, 1, 2, 3, 4, 5, 6]
//myArr.push(7)
//myArr.unshift(9)
//myArr.shift()
console.log(myArr.includes(8)); // The element to search for.Determines whether an array includes a certain element, returning true or false as appropriate.

const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(typeof newArr);

// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(0, 4) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(0, 4)
console.log(myn2);

console.log(myArr);//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements


const alpha = ["A", "B", "C", "D"]

const sigma = ["Q", "R", "T", "G"]

//alpha.push(sigma)

//console.log(alpha);

const simpp = alpha.concat(sigma) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.

console.log(simpp);

const newSimpp = [...alpha, ...sigma]

console.log(newSimpp);


const arr = [1, 2, 3, 4, [5, 6, 7, 8], 5, [3, 6, 7]]

console.log(arr);

const newArra = arr.flat(Infinity)
console.log(newArra);



console.log(Array.from("Ajay")); // Creates an array from an iterable object.

console.log(Array.from({ name: "Ajay" })); //intersting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));