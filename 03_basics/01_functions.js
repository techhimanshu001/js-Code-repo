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

