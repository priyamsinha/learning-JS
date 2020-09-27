
const obj={a:1,b:2,c:3,e:5};

const {a,b,e}=obj;
//or
// ({a,b,e})=obj;c
// destructured variable name must be same as key name
// int the object that it is referring

// order does not matter it will map through name
console.log(a);
console.log(b);
console.log(e);

console.log("\n\n");
const arr=[1,2,3,4,5];
let[x,y,z,...rest]=arr;

console.log(x);
console.log(y);
console.log(z);

// using spread operator(...)
console.log(rest); // array of length 2 containing 4,5 