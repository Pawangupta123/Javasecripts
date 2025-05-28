const PromiseOne = new Promise(function (resolve, reject) {
    // async task
    //db calls, api calls, etc.
    setTimeout(function () {
        console.log("Async task completed");

    }, 1000)
})
PromiseOne.then(function () {
    console.log("promise consumed");
})
new Promise(function (resolve, reject) {
    console.log("async task 2");
    resolve();
}, 100).then(function () {
    console.log("promise 2 consumed");
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user: "Pawan", email: "guppwn@gmail.com"

        });

    },1000)
})
.then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName: 'pawan', email:'guppwn@gmail.com', passward: 'p@12345'

            });
        }else{
            reject("Error: Something went wrong");
        }
        
    },1000)
})
PromiseFour.then((user)=>{
    console.log(user);
    return user.userName;
})
.then(function(userName){
    console.log(userName);
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>
    console.log("Promise is completed")
);

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName:"Fuzi", email: 'pg@gmail.com', passward: '123456'
            })
        }else{
            reject("Error: Something went galt");
        }

    },1000)
});
async function ConsumePromiseFive() {
    try {
        const response = await PromiseFive
        console.log(response);
    }catch (error) {
        console.log(error);
    }
}
ConsumePromiseFive()

// async function GetUser() { 
//     try {
//         const resopnse = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await resopnse.json();
//         console.log(data); 
//     } catch (error) {
//         console.log(".E:", error);
        
//     }
// } GetUser()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
}).then((data) =>{
    console.log(data);
    
}).catch((error)=> console.log(error)
);
