// Object Literals
const mysym = Symbol("key1")
const JsUser={
    name:"Himanshu",
    age:20,
    location:"Gr. Noida",
    college:"GLBITM",
    mysym:"Cse22252"
}

console.log(JsUser.age);
console.log(JsUser["name"]);
console.log(JsUser.mysym);
console.log([mysym])
console.log(JsUser["email"]);

JsUser.gretting= function (){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser.gretting())