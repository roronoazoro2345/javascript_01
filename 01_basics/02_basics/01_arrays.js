//array

const myarr=[0,1,2,3,4,5]
const myheroes=["Aniket","Atul"]
 const myarr2=new Array(0,1,2,3,4,5)
 console.log(myarr[1])

 //array methods

 myarr.push(6)
 myarr.pop()
 myarr.unshift(7)
 myarr.shift()
 console.log(myarr.includes(3))
 console.log(myarr.indexOf(2))
 console.log(myarr)

 const newarr=myarr.join()
 console.log(newarr)
 console.log(typeof(newarr))

 //slice,splice

 console.log("A",myarr)
 const myn1=myarr.slice(1,3)
 console.log(myn1)
 console.log("B",myarr)
 const myn2=myarr.splice(1,3)
 console.log("C",myarr)
 console.log(myn2)

