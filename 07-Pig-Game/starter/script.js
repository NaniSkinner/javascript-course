'use strict';

//We are starting by placing the score to 0 and hidding the dice
//We are selecting the two elements by their unique id inside the class name (score -- 0 and score -- 1 )
// # means ID

//Selecting elements (El)
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // no # needed- Not writting a selector only passing ad ID//
const diceEl = document.querySelector('.dice');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // add the hidden dice command

// Creating a hidden class, adding it to the beginnig (this needs to be done first on the style.css file)
