const { response } = require("express");

const promises = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise is done");
    resolve();
  }, 1000);
});

promises.then(function () {
  console.log("I am done");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise is done 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("I am done 2");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ajay", email: "ajay@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
  let error = false
  if (!error) {
    resolve({username: "Ajay" , password:"1234"})
  }
  else{
    reject('ERROR: Something went wrong')
  }
    } , 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
})
  .then((username) => {
    console.log(username);
    
})
  .catch(function(error)  {
console.log(error);

})
  .finally(() => console.log(    "The promise is either resolve or rejected"
  ));
  
  const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error) {
          resolve({username: "javaScript" , password:"1234"})
        }
        else{
          reject('ERROR: JS went wrong')
        }
          } , 1000)
  })

  async function consumepromiseFive(){
   try {
    const response =  await promiseFive
   console.log(response);
   
    
   } catch (error) {
    console.log(error);
    
   }
  }
   consumepromiseFive ();

   fetch('https://api.github.com/users/Ajaykapasiya')
   .then((response) => {
    return response.json ()
   })
   .then((data) => {
    console.log(data);
   })
.catch ((error) => console.log(error))