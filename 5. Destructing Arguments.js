
const obj={
    v1:"sfaf",
    v2:"wrqf",
    v3:"hmhf"
};

const arr=[1,4,6];

function fo({v1,v2,v3}) // need {} and same key 
{
    return `${v1}\n${v2}\n${v3}\n`;
}
function fa([a,b,c])    // need [] in destructuring
{
    return `${a}\n${b}\n${c}`;
}

console.log(fo(obj));;
console.log(fa(arr));

function myfun(){
    return `Welcome, ${this.v1}`
}
console.log(myfun(obj));    // Welcome undefined
console.log(myfun.call(obj));// Welcome sfaf
// JS is unable to locate directly what this refers in the funcion
//  but with call we can specify