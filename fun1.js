

function sayMyName() {
   console.log("A");
   console.log("J");
   console.log("A");
   console.log("Y");
}

sayMyName()


function addTwoNum(number1 , number2 ){

    console.log(number1 + number2);
    

}

addTwoNum(3,33)



function addNum(num1 , num2)
{
    //let result = num1 + num2
   // return result
   return num1 + num2
// return ke baad kuch bhi print nhi hote 
//ex
console.log("ajay");


}

const result = addNum(2,32)

console.log("results: " , result);



function userLoggedIn (username){
    if (username === undefined) {

        console.log("Please enter the username");
        return
        
    }
    return`${username} just logged in `
}
console.log(userLoggedIn())

//console.log(userLoggedIn("AJAY"))
