const user = {
    username : "hitesh",
    loginCount :8,
    signedIn:true,
    getUserDetails : function(){
        console.log("username is " + this.username) 
        console.log(this)
    }
};
const {username:u,loginCount:l,signedIn:s,getUserDetails:details} = user;
console.log(u)
const b = details.bind(user)
b()


function myuser(username,count , sign){
    this.username=username
    this.count=count
    this.sign=sign

    return this
    
}

//injecting the attribute and methods in the function and object
//the function in javascript is treated as the object
console.log("###############################################");

const ob = new myuser("Rudra Tiwari" , 6 , true)

 const obj = function multiplyBy5(num){
    return num*5
}
obj.power=2
console.log(obj(5))
console.log(obj)


//prototype
function cart(item,count,price){
    this.item=item
    this.count=count
    this.price=price
}

cart.prototype.getUserDetails = function details(){
    console.log(`the cart details ${this.item},${this.count},${this.price}`)
}

const d = new cart("jalebi",3,200)
d.getUserDetails()



//Key concept of the prototype
//1->prototype chaining
//2->inheriting the properties and methods of the parent object
//3->accessing and modifing the prototype


function animal(name,breed){
    this.name=name
    this.breed=breed  
}
animal.prototype.speak =function speak(){
    console.log("animal is not speak similar like human")
}

function dog(name,breed,age){
    animal.call(this,name,breed)
    //call and this
    //call parent constructor with this 
    this.age=age
}

dog.prototype = Object.create(animal.prototype)
dog.prototype.constructor=dog
dog.prototype.bark = function(){
    console.log(this.name+" barks. ")
}

const Dog = new dog("buddy","Rotwheeler",12)
Dog.speak()

//accessing and modification of the method
dog.prototype.bark = function newBark(){
    console.log(`${this.name} bark is barking again with another dog`)
}
Dog.bark()

























