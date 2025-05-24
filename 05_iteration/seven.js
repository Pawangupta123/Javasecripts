let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const Number=myNumbers.map((num)=> num+10);
//console.log(Number);

const Number = myNumbers.map((num) =>num+10)
                        .map((num)=>num*3)
                        .map((num)=>num-5)
                        .filter((num)=> num>41) 
console.log(Number);


