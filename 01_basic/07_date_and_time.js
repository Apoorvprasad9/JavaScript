 //date

 let myDate =new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toDateString());

//  let myCreatedDate = new Date(2025,0,25)
//  let myCreatedDate = new Date(2025,0,25,5,3)
//  let myCreatedDate = new Date("2025-01-05")
 let myCreatedDate = new Date("01-14-2025")
 
//  console.log(myCreatedDate.toLocaleString());

 let myTimeStamp =Date.now()

//  console.log(myTimeStamp);
//  console.log(myCreatedDate);
//  console.log(Math.floor(Date.now()/1000));
 
 let newDate=new Date()
 console.log(newDate);
 console.log(newDate.getMonth()+1);
 console.log(newDate.getDay());
 newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:""
 })
 
 
 

 
 
 