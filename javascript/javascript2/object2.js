const tinderUser =  new Object()
tinderUser.id= "123abc"
tinderUser.name= "dammy"
tinderUser.isLoggerIn = false

const regularUser = {
    email : "someOne@gmail.com",
    fullName:{
        userfullName :{
            firstName :"rudra",
            secondName :"tiwari"
        }
    },
    caste: "brahman devta"
}
console.log(regularUser.fullName.userfullName.firstName)

const obj1 = {1:"a" , 2:  "b"}
const obj2 ={3:"c" ,4:"d"}
const obj6 ={5:"c" ,6:"d"}

const obj3 = {obj1,obj2}

const obj4 = Object.assign({},obj1,obj2,obj6)
//this empty object is give because all the object 
//obj1, obj2 , obj3 assign to this empty object in javascript


//this is spread operator to merge the object in java
const o = {...obj1 , ...obj2 ,...obj3}
console.log(o)

const user = [
    {
        id:1,
        name:"rudra"

    },
    {
        id:2,
        name:"preet"

    }
]

console.log(user[0].id)

console.log("This is my all keys")
console.log(Object.keys(o))
console.log("this is my all values")
console.log(Object.values(o))
console.log("this is my all entries in database")
console.log(Object.entries(o))



console.log("-------------------------------------------------------------")

const course = {
    courseName :"js in hindi",
    price :"990",
    courceInstructor :"rudra"
}

//destructing the object in javascript 
const {courceInstructor:instructor} =course
console.log(instructor)
























