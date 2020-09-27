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