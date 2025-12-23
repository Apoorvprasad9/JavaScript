// let myName="Apoorv"

// console.log(myName.truelength);

let myHeros =["thor","spiderman"]

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){

    }
}

Object.prototype.hitesh=function(){
    console.log('Apoorv is present in all objects');
}

Array.prototype.heyApoorv =function(){
    console.log('Apooorv says hello');
}
// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyApoorv()
// heroPower.heyApoorv() //not access

//inherritance

const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher ={
    makevideo:true
}

const teachingsupport ={
    isAvailable:false
}

const TASupport={
    makeAssingnment:'JS assignment',
    fullTime:true,
    ___proto__:teachingsupport
}

Teacher.__proto___=User

//modern syntax
Object.setPrototypeOf(teachingsupport,Teacher)

let anotherUsername="chaiAurCode   "
String.prototype.trueLength=function(){
    console.log('${this}');
    console.log('${this.name}');
    console.log('True length is : ${this().trim().length}');
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

