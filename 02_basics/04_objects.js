const tinderuser = new Object()

const tinderuser2 = {}

//console.log(tinderuser)
 tinderuser2.name="Raj"
 tinderuser2.age=19
 tinderuser2.sex = "bisxual"


//console.log(tinderuser2)

const regus={
    email:"xyz.com",
    Username:{
        Userfullname:{
         firstname:"raj",
         Lastname:"Singh"
        }
    }
}

//console.log(regus.Username)  


console.log(Object.values(regus))
console.log(regus.hasOwnProperty('isLoggedIn'))

// DESTRUCTURING OBJECT

var {email} = regus
console.log(email)
console.log(email);

//JSON FORMAT OBJECT

{
    "name":"Hitesh",
    "company":"Jio",
    "Designation":"Manager"
}