// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`Db conneted`);
    
})();

//()()//IIfe golobol scope se jo poluction hota hai usse hatane ke liye IIfe ka use krte hai 
( (name)=>{
    //unnamed
    console.log(`Db Connected ${name}`);
}) ("Pawan");