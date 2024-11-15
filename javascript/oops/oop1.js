function user(name, address , id){
    this.name=name;
    this.address=address;
    this.id=id
}

function cart(name ,address , id , item ,price,count){

   user.call(this,name,address,id)
   this.item=item;
   this.price=price
   this.count=count; 
}


user.prototype.trueLength = function(){
    console.log(`the true length of the name is ${this.name.trim().length}`)
}

{
const u = new user("ramesh","ghaziabad",1)
const u1 = new user("      Rudra Tiwari     ","ghaziabad",2)
u.trueLength()
u1.trueLength()
console.log(u)
const c = new cart("rudra","ghaziabad","2","grocery",400,4)
console.log(c)
}



//inheritance 
class car{
    constructor(name){
        this.name=name;
    }

    details(){
        return `i have this car name ${this.name}`
    }
}
class model extends car{
    constructor(name,model){
        super(name)
         this.model=model
    }

    modelDetails(){
        return `${this.details()}  and having model ${this.model}`
    }
}

let mycar = new model("Ford","Mustung")
console.log(mycar.modelDetails())


