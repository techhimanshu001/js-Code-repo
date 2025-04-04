// stack(Primitive)   ----   Heap(Non-Primitive)
let mychannel="yahoo";
let mychannel2=mychannel;
 mychannel2="funwithcode";


console.log(mychannel); //yahoo
console.log(mychannel2); //funwithcode

let userOne={
    email:"xyz@gmail.com",
    upid:"xyz"
}

let userThree={
    email:"pqr@gmail.com",
    upid:"xyz"
}
let userTwo=userOne;
userTwo.email="pqr@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

console.log(userOne===userTwo) //true
console.log(userOne==userTwo) //true
console.log(userOne===userThree) //false
console.log(userThree==userOne)
console.log(userOne);
