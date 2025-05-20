const Hero = ["thor", "ironman", "spiderman"];
const Dc = ["superman","flash", "spiderman"];
// Hero.push(Dc);
// console.log(Hero);//['thor','ironman','spiderman',[ 'superman', 'flash', 'spiderman' ]]
// console.log(Hero[3][1]);
const myHeros=Hero.concat(Dc);
//console.log(myHeros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'spiderman' ]
const Allhero =[...Hero,...Dc];
// console.log(Allhero);

const anotherArr = [1,2,3,[4,5,6],7,[6,8,[9,4]]];
const realArr = anotherArr.flat(Infinity);//[ 1, 2, 3, 4, 5,  6, 7, 6, 8, 9,4]
console.log(realArr);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh")) convert string to array
console.log(Array.from({name: "Hitesh"}))//questions

let sc1=100;
let sc2=200;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3));//[ 100, 200, 300 ]


