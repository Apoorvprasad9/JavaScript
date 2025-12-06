 //primitive

 //7 types : String ,Number , Boolearn, null,undefiend, Symbol,BigInt

const score =100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id=Symbol('123')
const anotherId =Symbol('123')

console.log(id==anotherId);

const bigNumber=255254423558n



 // Reference (non primitive)

 // Array, object , Function 

 const hero =["shaktiman", "naagraj", "doga"]
  let myobj= {
    name:"apoorv",
    age : 21,
 }

  const myFunction =function(){
    console.log("Hello world");
  }
 //**************************************

 //Stack(primitive), Heap(Non-primitive)

 let myYoutubename= "apoorvgupta"

 let anothername = myYoutubename
 anothername=" majhbnnn"

 console.log(anothername);
 
 let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
 }

 let userTwo =userOne
 userTwo.email=" apoorv@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 