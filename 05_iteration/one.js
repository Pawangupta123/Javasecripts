//For

// for(let i =0; i<=10; i++){
//     const ele = i;
//     console.log(ele);
    
//}
// for (let i = 0; i < 10; i++) {
//     console.log(`outer: ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`inner: ${j} and outer loop: ${i}`);
//         console.log(i*j);
        
//     }
// }

let myarr = ["banana", "apple", "orange", "kiwi"];
console.log(myarr.length);     
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
}    
// for (let i = 0; i <=20; i++) {
//     if(i==5){
//         console.log("detected 5");
//         break;
//     }
//     console.log(`the fav value is :${i}`);
    
// }                                                 
for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log("detected 5");
        continue;
    }
    console.log(`the fav value is :${i}`);
    
}                                                 
