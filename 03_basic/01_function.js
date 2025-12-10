 function sayMyName(){
    console.log("A");
    console.log("P");
    console.log("O");
    console.log("O");
    console.log("R");
    console.log("V");
 }
//  sayMyName()
 
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);  
// }

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1 + number2 
}
 const result=addTwoNumbers(3,5)

//  console.log("Result:" ,result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("PLEASE ENTER A USERNAME");
        return        
    }
    return '${username} just logged in'
}

console.log(loginUserMessage("Apoorv"));
console.log(loginUserMessage());

