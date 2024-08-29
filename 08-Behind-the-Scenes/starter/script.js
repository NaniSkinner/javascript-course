'use strict';

function calcAge(birthYear) {
  // calcAge is a Global scope because is at the top level code. Creates its own scope = varaible enviroment of its execution content
  const age = 2037 - birthYear;
  //console.log(firstName); // available through scope chain

  function printAge() {
    let outPut = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milenial = true;
      const firstName = 'Steven'; // variable name in the current scope first (parent scope)
      const str = `Oh, and you are a milenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b; //blocked scoped
      }

      outPut = 'NEW OUTPUT'; //manipulated an existing variable inside a scope, reassining
    }
    console.log(milenial); // variables with var are function scopped. They ignore the block
    console.log(outPut); // works w/out strict mode
  }

  printAge();

  return age;
}

//Global Variable \
const firstName = 'Nani';
calcAge(1989);
