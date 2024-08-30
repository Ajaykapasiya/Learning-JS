// This keyword refer the current constant 
// 

const user = {
    username : "ajay",
    age : 20,

    welcomeMessage : function()
    {
       console.log(`${this.username} welcome to the website`);
       
    }
}

user.welcomeMessage()



function chai (){
    let name= "Ajay"
    console.log(this.username);
}

chai()



const chaii = function(){
    let name= "Ajay"
    console.log(this.username);

}

chaii()


// () => {}  this is the arrow function

const chaiii = () =>{
    let name= "Ajay"
    console.log(this.username);
}

chaiii()


// this is the arrow function
// when the curly braces is use (return) is mandatory and this is explict function
const addTwoNum = (num1 , num2) => {
    return num1 + num2
}

console.log(addTwoNum(2,4))


// arrrow implict function

const addNum = (num1 , num2) =>  num1+num2

console.log(addNum(9,8));
