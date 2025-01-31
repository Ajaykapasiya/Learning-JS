

//const myNums = [1,2,3,4,5,6,7,8,9]
//
//const  newNum  = myNums.filter((nums) => nums>5)
//
//console.log(newNum);




const books = [
    {title: ' Book one ' , genre : 'history' , publish: 2001, edition: 2024} ,  
    {title: ' Book two ' , genre : 'science' , publish: 1289, edition: 1390} ,
    {title: ' Book three ' , genre : 'physics',publish: 2002, edition: 2010} ,
    {title: ' Book four ' , genre : 'maths' ,  publish: 2001, edition: 2020} ,
    {title: ' Book five ' , genre : 'history' ,publish: 2001, edition: 2024} ,
    {title: ' Book six ' , genre : 'chemistry',publish: 2004, edition: 2023} ,
    {title: ' Book seven ' , genre : 'history',publish: 2001, edition: 2024} ,
    {title: ' Book eight ' , genre : 'maths' , publish: 2005, edition: 2024} ,
    {title: ' Book nine ' , genre : 'physics' ,publish: 2019, edition: 2024} ,

];


const book = books.filter( (bk) => bk.genre === "history" )

console.log(book);
