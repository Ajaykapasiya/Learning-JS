// Primitive  => These are the call by value

// 7 types: string, Number, Booolean, null, undefined, Symbol,BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outSideTemp = null
 let userEmail; // it will give undefined 
 
 const id = Symbol('123')
 const anotherId = Symbol('123')

 const bigNumber = 2134567543245n // n is represent the bigInt


// Reference (Non-Primitive)
//Array, objects, Function


const heros = ["IM", "SM","CA", "TH"]

let myobj = // myobj is variable
{
    // inside the curly bracket all are object
    name : "ajay",
    age : 22,
}




const myFunction = function ()
{
console.log("Hello duniya");
}