const user ={
    username:"Apoorv",
    loginCount:8,
    signedIn:true,

    getuserDetails:function(){
        // console.log("Got user details from database ");
        console.log('username:${this.username}');
        
    }


}
// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount =loginCount;
    this.isLoggedIn=isLoggedIn

    this.greeting =function (){
        console.log('Welcome ${this.username}');
        
    }

    return this
}

const userOne = new User("Apoorv",12,true)
const userTwo=user("chaiAurCode",11,false)
console.log(userOne.constructor);
console.log(userTwo);

