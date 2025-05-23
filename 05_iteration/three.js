//1for of{}

//["",""], [{},{}]

// const arr =[1,2,3,4,5,6,7,8,9,10];
// for (const num of arr) {
//     console.log(num);
// }
// const greetings = "hello my name is pawan";
// for (const char of greetings) {
//     console.log(char);
// }

//Maps 

const maps = new Map();
maps.set("pawan","P")
maps.set("Us","Usa")
maps.set("FR", "France")
maps.set("IN", "India")
for (const [key, value] of maps) {
    console.log(value);
}