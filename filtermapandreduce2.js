

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.map((nums) => nums * 10 )

console.log(newNum);


const newNums = myNums 
                .map((nums) => nums * 10 )
                .map((nums) => nums + 1 )

console.log(newNums);


const newNumss = myNums 
                .map((nums) => nums * 10 )
                .map((nums) => nums + 1 )
                .filter((nums) => nums > 40)

console.log(newNumss);



// Reduce

const numrs = [1,2,3]

//const myTotal = numrs.reduce(function (acc , currval)
//{
//    console.log(`acc value ${acc} and current value ${currval}`);
//    
//    return acc + currval
//}, 0)

const myTotal = numrs.reduce((acc , currval ) => acc+currval , 0)
 
console.log(myTotal);


const course = [
    {
        itemName : "js course",
        price : 1000
    },

    {
        itemName : "c course",
        price : 1230
    },

    {
        itemName : "java course",
        price : 9876
    },

    {
        itemName : "cpp course",
        price : 3443
    },

    {
        itemName : "ruby course",
        price : 14343
    },
]


const finalPrice = course.reduce((acc , course) => acc+course.price , 0  )

console.log(`the total price of course ${finalPrice}`);
