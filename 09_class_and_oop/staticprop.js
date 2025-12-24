const { use } = require("react");

 class User{
    constructor(username){
        this.userame=username
    }

    logMe(){
        console.log('Username:${this.username}');
        
    }
    createId(){
        return '123'
    }
 }

 const hitesh=new User("hitesh")
 console.log(hitesh.createId());

 class Teacher extends use{
     constructor(username,email){
        super(username)
        this.email=email
     }
 }

 const iphone =new Teacher("iphone","i@phone.com")
 console.log(iphone.createId());
 
 