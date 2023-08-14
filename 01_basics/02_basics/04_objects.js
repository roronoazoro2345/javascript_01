//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="234abc"
tinderUser.name="aniket"
tinderUser.IsLoggedIn=false
//console.log(tinderUser);

const regularuser={
    email: "aseg@yahoo.com",
    fullname:{
        userfullname:{
            firstname:"aniket",
            lastname:"singh"
        }

    }
}
//console.log(regularuser.fullname.userfullname.lastname);
const obj1={1:"a" ,2:"b"}
const obj2={3:"c" ,4:"d"}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
const user=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
    },
    {

    },
        
]
user[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const course={
    course:"javascript",
    price:"25k",
    instructor:"aniket"
}
const {instructor}=course
console.log(instructor);

{
    "name":"zoro",
    "course":"one-piece",
    "price":"free",

}
[
    {},
    {},
]