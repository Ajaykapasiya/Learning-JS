
//const tinderUser = new Object()
const tinderUser = {}
console.log(tinderUser);

const tinderUsr = {}
tinderUsr.id = "1234"
tinderUsr.name = "asdf"
tinderUsr.isLoggedIn = false

//console.log(tinderUsr);

const regularUser = {
    email : "asdfgh@gmail.com",

    fullname : {
        userfullname : {
            firstname : "Ajay",
            lastname : "kapasiya"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


// Merge the object 

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = Object.assign (obj1 , obj2)

const obj3 = {...obj1 , ...obj2}
console.log(obj3)


console.log(Object.keys(tinderUsr));
console.log(Object.values(tinderUsr));