function sayMyName(){
    console.log("Hello this is rudra ")
    console.log("this is my function in javascript")
}
sayMyName()


console.log("<--------------------Calculator----------------------->")
///function parameter vs function argument
function addTwoNumber(num1 , num2){
       console.log(num1 +num2);
}

function addTwoNumber(num1 , num2){
   let result  = num1+num2
   return result
}

const result = addTwoNumber(10,30)
console.log(result)

function loginUserMessage(username ="sam"){
    if(!username){
        console.log("please enter a user name")
        return
    }
    

    return `${username} just loggedin`
}
const login = loginUserMessage("rudra") 
console.log(login)


//rest operator to give the element in the array 
//this rest operator return the array of all the numnber
function CalucateCartPrice(...num1){
     return num1;
}

const prices = CalucateCartPrice(200,300,400,500,600,700)
let p=0;
prices.forEach(element => {
    p=p+element; 
});
console.log(`the price of the cart is ${p}`)

function amazonCart(val1, val2 , ...num){
      return num
}
let ap=0;
const amazonPrice = amazonCart(100,200,300,400,500)
amazonPrice.forEach(element => {
   ap=ap+element
    
});
console.log("the amazon price is ",ap)


const user = {
    username : "rudra",
    price : 199
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username : "preet",
    price :500

})

function returnSecondValue(getArray){
    return getArray[2]
}
const array = [100,200,300,400]
console.log(returnSecondValue(array))








