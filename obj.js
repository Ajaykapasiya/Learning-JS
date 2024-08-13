// What is singleton js ?
// Object.create = this is constructor and iske andar he singleton bante hn 


// Obect literals.

const mySym = Symbol("key")

const JsUser = {
    name: "ajay",
    "full name": "Ajay kapasiya",
    [mySym]: "mykey",
    age: 20,
    email: "audhqwabiu@gmail.com",
    location: "noida",
    isLoggedIn: false,
    lastLoginDay: ["monday", "Saturday"]
}

//console.log(JsUser);
//console.log(JsUser.email);
//console.log(JsUser["email"]);// this is the best way to extracted the value
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym])
//JsUser.email = "ajay@gmail.com"// change the email
//console.log(JsUser);


// Object.freeze(JsUser); // freeze lock the object , it does not change the value in the object
//JsUser.email = "sadfgfhg@gmail" 
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS ");
}

console.log(JsUser.greeting())



