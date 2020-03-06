const sayHello = function(number) {
  let count = 1;
  for(let i = 0; i < number; i++) {
  console.log("Hello, world " + count);
  count += 1;
  }return count;
};

sayHello(2);

const sayHello2 = function(number) {
  let people = ['Crosby', 'margo', 'nicole', 'luigi']
  for(let i = 0; i < number; i++) {
  console.log("Hello, " + people[i]+"!");
  } 
};

sayHello2(1);

const sayHello3 = function (name) {
  console.log(`Hello, ${name}!`);
}

// sayHello3("Caliban");
// sayHello3("Miranda");
sayHello3("Margo");


/* ============================
using return in a function */

const sayHelloToConsole = function (name) {
  console.log(`Hello, ${name}!`);
};

sayHelloToConsole("Crosby");

const returnSayHello = function (name) {
  return "Hello, " + name
};
const greeting = returnSayHello("Crosby");
console.log(greeting);