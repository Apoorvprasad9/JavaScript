 const user ={
    username:"Apoorv",
    price:999,
    welcomeMessage:function(){
        console.log('${this.username},welcome to website');
         console.log(this);
    }

 }

//  user.welcomeMessage()
//  user.username="sam"
//  user.welcomeMessage()

//  console.log(this);

// function chai(){
//     let username="Apoorv"
//     console.log(this.username);
    
// }

function chai=()=>{
    let username="Apoorv"
    console.log(this.username);
}
chai();

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }

// const addTwo =(num1,num2)=> num1+num2
// const addTwo =(num1,num2)=> (num1+num2)

const addTwo=(num1,num2)=>({username:"Apoorv"})

console.log(addTwo(3,4))

// const myArray=[2,3,5,7,8]

//  myArray.forEach()