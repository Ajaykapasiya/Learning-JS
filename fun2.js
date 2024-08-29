//  "rest operator" (...) is used to represent an indefinite number of arguments as an array. 

function myCart(...num1){
    return num1
}

console.log(myCart(200,400,500))


// object pass in the function

const user = {
    name : "ajay",
    age :19
}

function handleMyObject(anyoject)
{
    console.log(`my name is ${anyoject.name} and my age is ${anyoject.age}`);
    
}

handleMyObject(user)