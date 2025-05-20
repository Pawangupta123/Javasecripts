let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());//5/20/2025
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toString());

// console.log(typeof(mydate));

// let MyCreatedDate = new Date(2023, 0, 24,6,4);
// console.log(MyCreatedDate.toLocaleString());//1/24/2023, 6:04:00 AM
let MyCreatedDate = new Date("01-17-2020");
//console.log(MyCreatedDate.toLocaleString());//1/17/2020, 12:00:00 AM

let myStampTime =  Date.now();
console.log(myStampTime);

//console.log(MyCreatedDate.getTime());//fix date time use 
console.log(Math.floor(myStampTime/1000));//milisecond;

let newdate = new Date();
// console.log(newdate);
// console.log(newdate.getDate());
// console.log(newdate.getDay());
// console.log(newdate.getMonth()+1);

// `${newDate.getDay()} and the time `
mydate.toLocaleString('default',{
    weekday: "long", 
});








