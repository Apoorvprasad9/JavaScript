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


function calculatecartprice(val1,val2,...num1){
    return num1
}

// console.log(calculatecartprice(200,400,500,2000));

const user ={
    username:"Apoorv",
    price:199
}

function handleobject(anyobject){
      console.log('username is ${anyobject.username} and price is ${anydbject.price}');
      
}
// handleobject(user)
handleobject({
    username:"sam",
    price:399
})

const mywArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(mywArray));
console.log(returnSecondValue([200,400,500,]));
