 // stack use in primitive type ( when stack m\m is used the copy of variable is provide )

 // heap use in non primitive type ( when heap m\m is used the reference of original value is provide)


let myYoutubename = "asdfg"

let anotherName  = myYoutubename

anotherName = "wertyu"

console.log(myYoutubename);
console.log(anotherName);


let user1 = {

    email : "ajay@123",
    upi :"asd@ybl"

}


let user2  = user1

user1.email = "ajay@321"

console.log(user1.email);
console.log(user2.email);