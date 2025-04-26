const mnum=[1,2,3,4,5,6,7,8]
const newnum=mnum.map((num) => num=num+1 && num%2===0);
console.log(newnum);
console.log(mnum);