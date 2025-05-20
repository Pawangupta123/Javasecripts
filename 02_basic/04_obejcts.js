// const tinderUser = new Object()
const tinderUser={}

tinderUser.id = "123abc";
tinderUser.name ="lolo";
tinderUser.islogin = false;

// console.log(tinderUser);
const regularUser={
    email: "pg@gameil.com",
    fullName:{
        UserFullname:{
            firstName:"Pawan",
            last:"kumar"
        }
    }
}
console.log(regularUser.fullName.UserFullname.firstName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj4 = {5:"a", 6:"b"};
//let obej3 = Object.assign({},obj1,obj2,obj4);//merger 3no obejects
const obej3 = {...obj1,...obj2,...obj4};
// console.log(obej3);

// console.log(tinderUser);
// console.log(tinderUser.name);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'lolo' ], [ 'islogin', false ] ]
// console.log(tinderUser.hasOwnProperty('islogin'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
