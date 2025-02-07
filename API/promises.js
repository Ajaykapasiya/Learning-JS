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

    } , 1000)
})
