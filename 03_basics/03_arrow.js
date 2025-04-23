const user={
    Username:"Him",
    Class:"CSE-C",
    welcomeMessage:function(){
        console.log(`Welcome ${this.Username}, to this Website`);
        console.log(this);
    }
}
function chai(){
    let Users = "VANSH";
    console.log(Users);
    function code(){
        let Users="HARSHIT";
        console.log(Users);
    }
    code();
}
//chai();
//user.welcomeMessage();
//user.Username="raj";
//user.welcomeMessage();
const champ=() => {
    let Users = "VANSH";
    //console.log(this.Users);
    function code(){
        let Users="HARSHIT";
        //console.log(this);
    }
    code();
}
champ();
function regular() {
    console.log(arguments); // ✅ works
}
const arrow = () => {
    console.log(arguments); // ❌ ReferenceError
};
regular();
arrow();