//singleton
//Object.create

const mySym =  Symbol("rdrprt")
const jsUser = {name: "rudra",
    age:16,
    class:"cse",
    "fullname":"rudrapreet",
    [mySym]: "prt",
    email: "rudra1306",
    isLoggedIn :false,
    lastLogin : ["Monday","Saturaday"]
}
console.log(jsUser.name)
console.log(jsUser["email"])
console.log(jsUser[mySym])

Object.freeze(jsUser)
jsUser.email = "rudraPreet"
console.log(jsUser.email)

