 //const tinderUser= new odject()
 const tinderUser={}

 tinderUser.id="123abc"
 tinderUser.name="sammy"
 tinderUser.isLoggedIn=false

//  console.log(tinderUser);

const regularUser={
    email:"same@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Apoorv",
            lastname:"Gupta"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj,obj2}
// const obj3=object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id:1,
        email:"apoorv@mail.com"
    },
    {
        id:1,
        email:"apoorv@mail.com"
    },{
        id:1,
        email:"apoorv@mail.com"
    },{
        id:1,
        email:"apoorv@mail.com"
    },

]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename:"js in hindi",
    print:"999",
    courseInstructor:"Apoorv"
}

//course.courseInstructor

const{courseInstructor: instructor}=course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name" :"Apoorv",
//     "coursename" :"js in hindi",
//     "price" :"free"
// }

[
    {},
    {},
    {},
    {},
    {},
]


