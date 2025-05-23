const UserEmail = 'pg@gmail.com';
// if(UserEmail){
//     console.log("login");
// }else{
//     console.log("not");
// }

//Falsy 

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (UserEmail.length!= 0) {
    console.log("Array is empty");
}
const emapty ={}
if(Object.keys (emapty).length==0){
    console.log("empty obj");
}
// Nullish Coalescing Operator (??): null undefined

// let val1 = 5??10;
// //console.log(val1);
// val1 = null??20;
 val1 = undefined??30??10;
console.log(val1);

// Ternery Op

//condition : true ?false;

const ice =100;

ice >20? console.log("true"): console.log("dfalse");

