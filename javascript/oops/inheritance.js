let flag=false;
class User{

    constructor(username){
        this.username = username;
    }
    logMe(){
        flag=true
        console.log(`USERNAME is ${this.username}`);
        return flag
    }
}

class Teacher extends User{
    constructor(username , email , password,check){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        let res = this.logMe()
        if(res==true){
            console.log("now can add the course")
        }
        
        
    }
}

//inheritance
//static
//bind
//getOwnPropertyDescriptor
//dfineProperties



const c = new Teacher("prachi pundir","rt1766285@gmail.com","bveriuwu");
c.addCourse()