// var c=300
let a=300 
 if(true){
  let a=10
  const b=20
   console.log("INNER:",a);
   
 }
//  console.log(a);
//  console.log(b);
//  console.log(c);
 
 function one(){
    const userName="Apoorv"
    function two(){
        const website="youtube"
        console.log(userName);
        console.log(website);
        
    }
    two()
 }
//  one()

if(true){
    const username ="Apoorv"
    if(username==="Apoorv"){
        const website ="YOUtube"
        console.log(username+website);
    }
}

//++++++++++++++++ Interesting +++++++++++
function addone(value){
     return num+1
}
addone(5)

const addTwo= function(num){
    return num+2
}
addTwo(5)