//For each loop 
// The forEach() method executes a provided function once for each array element.
// The forEach() method is not executed for empty elements.
// The forEach() method is not chainable.
// The forEach() method does not return a value.

const coding =["C++","Java","JavaScript","Python"]
// coding.forEach( function (value){
//     console.log(value);
// })

// coding.forEach((val) =>{
//     console.log(val);
    
// })

// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe);

coding.forEach((val, index, array) =>{
    console.log(val);
    console.log(index);
    console.log(array);     

})
const mycode =[{
    language: "javascript",
    file: "js"
},   

{
language: "Python",
    file: "py"
},

{
language: "C++",  
    file: "cpp"
},
{
language: "Java",       
    file: "java"
}];          
mycode.forEach((val) =>{
    console.log(val.language);
    // console.log(val.file);
    // console.log(index);
    // console.log(array);     
}
)       