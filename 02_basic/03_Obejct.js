// singleton
// Object.create

// object literals
Object.create//->constrution method
const Mysym = Symbol('key1');//symbol sntax
const JsUser = {
    name: "pawan",
    "fullName": "PawanKumar",
    [Mysym]: "keyone",
    age: 18,
    location: 'jaipur',
    Email: "pg@gmail.com",
}
// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[Mysym]);//acess the symbol systax
JsUser.Email = "pw@gmail.com"
//Object.freeze(JsUser);// values is not change 
JsUser.Email = "ww@gmail.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Jsuser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Jsuser ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

