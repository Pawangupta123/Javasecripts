//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol(unique), BigInt
const sc = 100;
const scValue = 100.3
const temp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");
console.log((id === anotherId));
const BigNumber = 462776n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["pawan", "fuli", "deapak"];
let Myobej = {

  name: "pawa",
  age: 35,
}
const myfunction = function () {
  console.log("Ram Ram");
}
console.log(typeof (temp));

/*"""""""""""""""""""""""""""""""""""""""""""stackand Heap Memory''""""""""""""""""""""
*/

//Stack(Primitive Type),Heap(Non Primitive  data types)
let myutube = "chaiwithcode";
let anotherName = "pwn";
anotherName = "guppwn@gmail.com";
console.log(myutube);
console.log(anotherName);
let userOne = {
  Email: "pwn@gmail.com",
  passward: 7366,
}
let userTwo= userOne;
userTwo.Email = "gu.gail.com";
console.log(userOne.Email);
console.log(userTwo.Email);

