const mynum=[1,2,3,4,5,6,7]
let initialval=0;
const newnum=mynum.reduce((accumulator,combine) => (accumulator+combine),initialval);
console.log(newnum)
const shopingcart=[
    {
        Product:"Jeans",
        Price:300,
        Quantity:1
    },
    {
     Product:"T-Shirt",
     Price:150,
     Quantity:1   
    },
    {
        Product:"Books",
        Price:700,
        Quantity:5
    }
]
const Total = shopingcart.reduce((acc,curr) => {
    console.log(`Product is ${curr.Product} and its Price is ${curr.Price} with Quantity ${curr.Quantity}`)
    return curr.Price*curr.Quantity+acc
},0 );
console.log(`Total is ${Total}`);