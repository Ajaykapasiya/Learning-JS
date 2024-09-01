

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
