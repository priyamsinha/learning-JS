/*
    Some points to keep in mind
1. Can omit function keyword
2. If the function takes single parameter can omit ()
3. If function only has one statement can omit {}
*/

const f1=()=>"hello world"
const f2=arg=>`value of arg is: ${arg}`;
const f3=(x=1,y=2)=> x*y;   // using default parameters too
console.log(f1());
console.log(f2('sad'));
console.log(f3(3));