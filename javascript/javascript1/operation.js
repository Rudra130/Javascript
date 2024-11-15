let val =3
let negValue = -val
console.log(negValue)

let str = "hello"
let str1 = " world"
let str3 = str+str1
 
let game =100
game++;
console.log(game)
++game
console.log(game);

//strict check;
console.log("2"===2)
const id =Symbol("123")
console.log(id)
const heroes =["shaktiman" ,"naagraj" ,"doga"]
console.log(typeof heroes)
const f = function(){
    console.log("hello")
}
console.log(f)


//+++++++++++++++++++++++++++++++++++++++++++++++
//STACK AND HEAP


//Stack =(primitive) , heap = ( object )
//but the reference of the object stored in the stack;

let myYouTubeName = "rudratiwariCodeHub"
let anotherName = myYouTubeName
anotherName="rudra tiwari"

console.log(myYouTubeName)
console.log(anotherName)
console.log(myYouTubeName)

let user ={
    email : "rudrapreet@outlook.com",
    upi  : "7355402136@paytm"
}

let user2 = user

console.log(user2)
console.log("this is my second user")
console.log(user)

//+++++++++++++++++++++++++++++++++++++++++++++++
//Strings--------------------------------->

const name ="hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo is ${repoCount} `)


const gameName = new String('rudra.com')
console.log(gameName)

 console.log(gameName.length)
console.log(gameName.toUpperCase())

const st= "rudra/tiwari/preet/dev/madhav/rudra";
const a = st.split("/")
console.log(a)
console.log(typeof a)

//++++++++++++++++++++++++++++++++++++++++++++++++++++
//Mathematics-----------------

const score = 400

const balance = new Number(100);
console.log(balance)

console.log("hiten codes")
console.log("this is my javascript code in github ")

s ="100"
n = Number(s)
console.log(typeof n)
b = 1
console.log(Boolean(b))
h =10
console.log(typeof (String(h)))


//Date------>

let myDate = new Date()
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString())
console.log(myDate.toDateString())
console.log(typeof myDate)

console.log("taking date as custom")

let myCreateDate= new Date("01-14-2023")
console.log(myCreateDate.toLocaleDateString());
console.log(myCreateDate.toLocaleTimeString())
console.log(myCreateDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime())
console.log(((((Date.now()/1000)/3600)/24)/365).toFixed(2))















