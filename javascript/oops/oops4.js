//getters and setter
//Method-1


class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }


    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value
    }

}

//define property---->Modern Syntax
//Method-2

function user1(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email' ,{
        get:function(){
             return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value

        }
    })

    Object.defineProperty(this,'password' ,{
        get:function(){
             return this._password.toUpperCase()
        },
        set:function(value){
            this._password=value

        }
    })
}

//Method-3
//Object ways

const user3={
    _email:"rudra@gmail.com",
    _password:"1234",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}





const u = new User("Rudra@Tiwari" ,"abc");
console.log(u.password)

const u1 = new user1("Rudra@Tiwari","ewqrqw");
console.log(u1.email);

const u3 = Object.create(user3)
console.log(u3.email)

