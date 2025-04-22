function add2Numbers (number1,number2){
        const arr=[]
        console.log(number1+number2)
        arr.push(number1);
        arr.push(number2);
        arr.push(number1+number2);
        const newobj = Array.of(number1,number2 );
        return newobj;
}

console.log(add2Numbers("3",4));

function CalculateCartPrice(value1,value2,...num){
        return num;
}

console.log(CalculateCartPrice(200,300,800,900));

const student={
        name:"Himanshu",
        Course:"B.tech.",
        Sec:"C"
}

function finddetails(anyObject){
        console.log(`The username is ${anyObject.name} and the course is ${anyObject.Course}` )
}

finddetails(student);