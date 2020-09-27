const obj={id:'1',name:'daily'};

// Member Access(.)
console.log(obj.name);      // return daily

// Computed Member Access []
console.log(obj['name']);   // return daily

// In operator 
console.log('id' in obj );  // returns true

// new operator
class Model{
    constructor(){

    }
}

const c1= new Model();
const c2= new Model();

// delete : can delete specific values in an array/object
delete obj.id
console.log(obj);

const arr=[1,2,3,4,5,6]
delete arr[5];
console.log(arr);   // o/p: [1,2,3,4,5,empty]