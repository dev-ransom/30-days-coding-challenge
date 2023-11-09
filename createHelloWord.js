/*
*Write a function createHelloWorld. It should return a new function that always returns "Hello World".
**/

// traditional function for a createHelloWorld

// const createHelloWorld = function () {
//     return function (...args) {
//         return "Hello World";
//     };
// };

// const helloWorld = createHelloWorld();
// const result = helloWorld();
// console.log(result);

// using arrow function to solve same challenge

const createHelloWorld = () => (...args) => "Hello World";
const helloWorld = createHelloWorld();
const result = helloWorld();
