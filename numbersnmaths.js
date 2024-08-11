
// ******************** Number ***************************


const number = 100
console.log(number);

const balance = new Number(200);
console.log(balance);

// convert into string
console.log(balance.toString());

console.log(balance.toString().length);
console.log(balance.toString().length);

// fix the precision value
console.log(balance.toFixed(1));


const hundreds = 1000000
// give the comms in number. they are in US standard for INDIAN standard write 'en-IN' in bracket after the toLocaleString
console.log(hundreds.toLocaleString('en-IN'));


// ******************** Maths *************************

console.log(Math);

// abs change the negative value into postive value
console.log(Math.abs(-4));

// round off the value
console.log(Math.round(5.3));


// always choose greater value 
console.log(Math.ceil(6.2));

// always choose lowest value 
console.log(Math.floor(6.2));


console.log(Math.min(1,2,3,4,5));

console.log(Math.max(1,2,3,4,5));

// Math.random give value between 1 and 0 
console.log(Math.random());
console.log((Math.random()*10) + 1 );

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1) + min));

