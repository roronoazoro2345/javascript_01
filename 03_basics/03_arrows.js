const user={
    username:"aniket",
    price:999,

    WelcomeMessage: function(){
        //console.log(`${this.username},welcome to website`);
        //console.log(this);
    }
}
//user.WelcomeMessage()
//user.username="sam"

//user.WelcomeMessage()
//console.log(this);

/* function chai(){
    let username="aniket"
    console.log(this);
} */
//chai()
/* function chai(){
    let username="aniket"
    console.log(this.username);
}
chai() */

/* const chai=function(){
    let username="aniket"
    console.log(this.username);
}
chai() */

const chai=()=>{
    let username="aniket"
    console.log(this)
}
chai()

/* const addtwo=(num1,num2) =>{
    return num1+num2
}
console.log(addtwo(3,4)) */

const addtwo=(num1,num2) =>    (num1+num2)

console.log(addtwo(3,4))