'use strict';

// function calcAge(birthYear) {
//   // calcAge is a Global scope because is at the top level code. Creates its own scope = varaible enviroment of its execution content
//   const age = 2037 - birthYear;
//   //console.log(firstName); // available through scope chain

//   function printAge() {
//     let outPut = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(outPut);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var milenial = true;
//       // Creating NEW variable w/ same name as outer scope's variable
//       const firstName = 'Steven'; // variable name in the current scope first (parent scope)

//       //Reassining outer scope's variable
//       outPut = 'NEW OUTPUT'; //manipulated an existing variable inside a scope, reassining

//       const str = `Oh, and you are a milenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b; //blocked scoped
//       }
//     }
//     console.log(milenial); // variables with var are function scopped. They ignore the block
//     console.log(outPut); // works w/out strict mode
//   }

//   printAge();

//   return age;
// }

// //Global Variable \
// // const firstName = 'Nani';
// // calcAge(1989);

// // variable
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Nani'; //undefined
// let job = 'Teacher'; // cannot access before in a TDZ
// const year = 1989;

// //function
// console.log(addDecl(2, 3));

// function addDecl(a, b) {
//   return a + b;
// } // only one that can be used before declaring it

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// // Just don't use var to declare variables. Declare variables at the top of code. Declare functions first, use them after the declarations.

// var x = 1; // creates a property in the window object
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(x === window.z);

// console.log(this); // the window object (global)

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // will be undifiend do to strict mode
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // window, b/c arrow function does not get its on function. Uses keyword of parent scope (the first this)
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // object that is calling the method. Jonas is the owner of the method
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // method borrowing
// matilda.calcAge();
// // allways point to the object that is calling the method

// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda'; // creates a property on a global object (var)

// // object literal. Not a block
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // object that is calling the method. Jonas is the owner of the method
//     console.log(2037 - this.year);
//   },

//   greet: () =>
//     console.log(`Hey ${this.firstName}`), // arrow function does not get its own this keyword. Never use it for a method

// jonas.greet(), // does not greer jonas b/c of the arrow function

// let age = 30;
// let oldAge= age;
// age = 31;
// console.log(age);
// console.log(oldAge); // is set to be 30

// const me = {
//   name: 'Jonas',
//   ager: 30,
// };
// const friend = me:
// friend.age=27;
// console.log('Friend', friend);
// console.log('Me', me);
// // source of confusion

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // Davis Williams

// Referenece Type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marraiged', jessica);
console.log('After marriege', marriedJessica);
// Jessica Davis in both, b/c it did not create a new object in the heap. Its another variable that point to the same object. Also is a const and we changed in the heap

marriedJessica = {}; // does not work bc its in the stack. If it was a let it would be allowed.

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'], //array is an object. Deeply nested, does not coppy to new object
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
// This does give us both last names. It is a real copy - a new object  was created to the heap

jessicaCopy.family.push('Mary'); // the push is adding it at the end of the arrays
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy); // points at the same object at the heap. Changed the array in both
