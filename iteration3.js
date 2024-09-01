//forof

const arr =[ 1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
} 


const greeting = "Hello world"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
    
}



// Map

const map = new Map()

map.set('IN', "India")
map.set('USA',"United states of america")


console.log(map);


for (const [key , value] of map) {
    
    console.log(key,`=>`,value);
    
}

// map are iterable , object are not.
// map are used for of loop and object used to iterate for in loop

const object1 = {
    js: 'java script',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift for ios'

}


for (const key in object1) {
   console.log(object1[key]);
   
        
    }

const coding = ["js" , "rb " , "cpp" , "java"]


coding .forEach( (item) => {
  console.log(item);
  
} )


coding .forEach( (item , index , arr) => {
    console.log(item , index , arr);
    
  } )
  
  

