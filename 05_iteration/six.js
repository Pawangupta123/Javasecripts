// const mycoding =["CPP","Java","Python","JavaScript","C#","Go"]; 
//  const values =mycoding.forEach((val) =>{
//     //console.log(val);
//     return val;
    
// })
// console.log(values);
//forEach() method does not return a value
//forEach() method is not chainable
//====Filter() method====
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const filteredNums = mynums.filter((val)=> val>4);
//console.log(filteredNums);

// const filteredNums = mynums.filter((num) =>{
//     return num > 4
// })
// console.log(filteredNums);

// const mynum =[]

// mynum.forEach((val) => {
//     if(val > 4){
//         mynum.push(val);
//     }
    
// })
// console.log(mynum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let UserBooks = books.filter((bk)=> "History" === bk.genre);
  console.log(UserBooks);
  
const NewBooks = books.filter((bk)=> bk.publish>1995 && bk.genre ==="History");
console.log(NewBooks);

