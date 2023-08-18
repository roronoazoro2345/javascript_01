function saymyname(){
    console.log("A")
    console.log("N")
    console.log("I")
    console.log("K")
    console.log("E")
    console.log("T")
}
//saymyname()

//function addtwonumber(number1,number2){
   // console.log(number1+number2);
//}
function addtwonumber(number1,number2){
    //let result=number1+number2
    return number1+number2
}

const result=addtwonumber(7,5)
//console.log("Result:",result)

function loginusermessage(username="sam"){
    if(username===undefined){
        console.log("Please Enter A Username");
        return
    }
    return `${username} just logged in`

}
//console.log(loginusermessage("Aniket"))
//console.log(loginusermessage(""))
//console.log(loginusermessage())

function calculatecartprice(v1,v2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,500,240,445));

const user={
    username:"aniket",
    price:199
}
function handleobject(anyobject){
    console.log(`Usename is ${anyobject.username} and price is${anyobject.price}`);
}
//handleobject(user)
handleobject({
    username:"sam",
    price:399
})

const newarray=[200,400,100,600]
function returnsecondvalue(getarray){
    return getarray[1]
}
//console.log(returnsecondvalue(newarray));
console.log(returnsecondvalue([200,400,600,800]));