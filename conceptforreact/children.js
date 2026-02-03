/*
Lesson 1: 
function sayHi() {
    return "Hi"
}
sayHi();
const result = sayHi()
result === "Hi";
*/

/*
Letssion: 2
function outer() {
  return function inner() {
    return "Hello";
  };
}
const x = outer();
// Now x === inner function (the full function)
*/

/*
Lesstion: 3 
const person = {
  name: "Fahad",
  age: 20,
};

function show(obj) {
  return obj.name;
}

const x = show(person);
console.log(x);

here, we can say, 
 - Functions receive values 
 - Objects are just values 

*/

/*
Lession: 4
const person = {
  name: "Fahad",
  age: 20,
};

function show({ name }) {
  return name;
}

const x = show(person);
console.log(x);
*/
