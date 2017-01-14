var names = ['Goya', 'Mac', 'Nan'];

// helper for array
names.forEach(function(name){
  console.log('forEach', name);
});

// arrows used for anonymous functions
// with statement body for multiple lines of code
names.forEach((name)=>{
  console.log('arrow-forEach', name);
});
// even simpler
names.forEach((name)=>console.log('haha'));


var sayHi = (name) => 'Hi, '+name+'!';
console.log(sayHi('Isa'));


// One major difference between anonymous functions and arrow functions
// anonymous function - take this binding
// arrow functions - take their parent this binding

// example
var Person = {
  name: 'Yi',
  greet: function(){
    names.forEach((name)=>{
      console.log(this.name + ' says hi to ' + name);
    })
  }
}

var Person2 = {
  name: 'Yi',
  greet: function(){
    names.forEach(function(name){
      console.log(this.name + ' says hi to ' + name);
    })
  }
}

Person.greet(); // Yi says hi to Goya...
Person2.greet(); // undefined says hi to Goya...
// this is because when we created the anonymous function, we've updated the this binding


// exercise

function add(a, b){
  return a+b;
}

console.log(add(3,4));

var add2 = (a,b)=>a+b;
var add3 = (a,b)=>{
  return a+b;
}
console.log(add2(3,4));
console.log(add3(3,4));
