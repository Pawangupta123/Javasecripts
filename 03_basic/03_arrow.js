const User ={
    Name: "Pawan",
    Price: 1000,
    welcomeMesg: function(){
       console.log(`${this.Name}, Welcom to my world`);
       console.log(this);
       
    }
}
// User.welcomeMesg();
// User.Name="poni"//contex
// User.welcomeMesg();
console.log(this);//empty{}

// function chai(){
//     let User ="Pawan"
//     console.log(this.User);->this not work in function its use obejct
    
// }
// chai();
// const chai = function chai(){
//    let User ="Pawan"
//     console.log(this.User);
// }
//chai();

const chai = ()=> {
   let User ="Pawan"
    console.log(this.User);
}
//chai()

// const Addtwo=(num1,num2)=>  num1+num2;//implicity
const Addtwo=(num1,num2)=> ({User: "Pawan"});

console.log(Addtwo(3,4))