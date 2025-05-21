const a = 10;
let b = 20;
//var c=30;
if (true) {
    const a = 40;
    let b = 20;

    console.log("inner:", a);

}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    userName = "pawan"
    function two() {
        web: 'utube'
        console.log(userName);
    }
    //console.log(web);

    two()
}

// one()

if(true){
    const userName = "pawan"
    if(userName==="pawan"){
        const web ="pg@gmail.com"
        console.log(userName+web);
        
    }
   // console.log(web);  
}
//console.log(userName);

//+++++++Intersted++++++
//console.log(addOne(5));
function addOne(num){
    return num+1
}
//console.log(addOne(5));
console.log (addtwo(6));//not run becouse we are stror the variable . not decalr 
const addtwo = function(num){
    return num+2
}
console.log (addtwo(6));




