function myFunction(){
console.log("P");
console.log("A");
console.log("W");
console.log("A");
console.log("N");
}
//myFunction()

// function TwoNu (A1,A2){
//     console.log(A1+A2);
    
// }

function TwoNu (A1,A2){
    // let result = A1+A2;
    // return result;
    return A1+A2;
    
}
const res =TwoNu(3,6);
// console.log("res:",res);

function LogInuser(userName='sam'){
    if(!userName){
        console.log("Please enter username");
        return;
        
    }
    return `${userName} just login`;
}
//console. log(LogInuser("Pawan"));
// console.log(LogInuser());

function calCartPrice(val1,val2,...num1){//....raset parameter if ...num-.print [200,400,600] val1,val2..num1-> [600,2000]
    return num1;
}
console.log(calCartPrice(200,400,600,20000));

const user={
    userName:"pawan",
    price:1000
}
function handleobj(anyobejct){
    console.log(`user name is ${anyobejct.userName} and price ${anyobejct.price}`);
     
}
//handleobj(user);

handleobj({
    userName:'poni',
    price:920
})

const myArr=[20,40,60];
function getArr(seco){
    return seco[1];
}
//console.log(getArr(myArr));
console.log(getArr([20,40,60]));



