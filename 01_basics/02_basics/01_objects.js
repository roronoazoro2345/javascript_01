//object literals
const mysym=Symbol("key1")
const jsuser={
    name:"Aniket",
    "fullname":"Aniket singh",
    [mysym] : "mykey1",
    age:21,
    email:"234@gmail.com",
    location:"west bengal",
    IsLoggedIn:true,
    lastlogindays:["Monday","Saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysym])

jsuser.email="123@gmail.com"
//Object.freeze(jsuser)
console.log(jsuser)
jsuser.greeting=function(){
    console.log("Hello js user");
}


jsuser.greeting2=function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());