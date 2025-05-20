const sc = 100;
console.log(sc);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString().length);//lenght is 3
console.log(balance.toFixed(1));//500.0

const otherNumber = 736.4
console.log(otherNumber.toPrecision(3));//736

const hunderend = 1000000;
console.log(hunderend.toLocaleString('en-IN'));// 10,000,00

//+++++++++++++++++++++++++Maths++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-3));//3
// console.log(Math.round(9.3));
// console.log(Math.floor(9.3));
// console.log(Math.ceil(9.3));

console.log(Math.sqrt(25));
console.log(Math.max(4,3,7,3,5,1));

console.log(Math.min(6,5,2,8));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;


console.log (Math.floor(Math.random() *(max - min +1))+min);













