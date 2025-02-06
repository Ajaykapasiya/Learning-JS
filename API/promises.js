const promises = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise is done");
    resolve();
  }, 1000);
});

promises.then(function(){
    console.log('I am done');
    
})



new Promise (function (resolve ,reject){
    setTimeout(function(){
       console.log("Promise is done 2");
        resolve()
    },1000)
}).then(function(){
    console.log("I am done 2");
    
})