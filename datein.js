// Date

let myDate = new Date()

console.log(myDate);

console.log(myDate.toLocaleString());

console.log(myDate.toString());

console.log(myDate.toDateString());


// Date is an a object in js 
console.log(typeof myDate);

//let createMydate = new Date ( 2023 , 0 ,29)
let createMydate = new Date ( "2024-01-29")

console.log(createMydate.toLocaleString());


// Timestamp
// used for compare the Time
// Timestamp convert  time into milesecond and it is easily compare 

let myTimestamp = Date.now
console.log(myTimestamp());
console.log(createMydate.getTime());

// convert in second

console.log(Math.floor(Date.now()/1000));

// Extract the date,day,month,hours from the date by get method
let newDate  = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());





