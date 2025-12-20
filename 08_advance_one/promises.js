 const promiseOne =new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptograpy,network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    },1000)
 })

 promiseOne.then(function(){
    console.log("promise consumed");
 })

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
 }).then(function(){
    console.log("Async 2 resolved");
    
 })

 const promiseThree =new promiseOne(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
 })

 promiseThree.then(function(user){
    console.log(user);
    
 })

 const promisefour =new promiseOne(function(resolve,reject){
    setTimeout(function(){
        let error=true 
        if(!error){
            resolve({username: "Apoorv", password:"123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
 })

 promisefour.then((user)=>{
    console.log(user);
    return user.username
 }).then((username)=>{
    console.log(username);
 }).catch(function(error){
    console.log(error);
 }).finally(()=> console.log("The promise is either resolved or rejected"))
 
const promiseFive =new promiseOne(function(resolve,reject){
    setTimeout(function(){
        let error=true 
        if(!error){
            resolve({username: "javascript", password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})



 