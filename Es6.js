//example of using let and const
//let is block scoped
//const is block scoped and cannot be reassigned
//const is used for variables that are not going to be reassigned
//let is used for variables that are going to be reassigned

//example of using let
// let ame = "John";
// console.log(name);
// name = "Jack";
// console.log(name);

//example of using const
const person = {
    name: "John",
    age: 30
}

//array destructuring
const numbers = [1,2,3,4,5];
const [first, second] = numbers;
console.log(first, second);

//object destructuring
// const {name, age} = person;
// console.log(name, age);

