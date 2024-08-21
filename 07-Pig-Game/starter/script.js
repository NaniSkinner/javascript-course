'use strict';

//We are starting by placing the score to 0 and hidding the dice
//We are selecting the two elements by their unique id inside the class name (score -- 0 and score -- 1 )
// # means ID

//Selecting elements (El)
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // no # needed- Not writting a selector only passing ad ID//
const current0El = document.getElementById('current--0');
const currentEl = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
// Creating a hidden class, adding it to the beginnig (this needs to be done first on the style.css file)
diceEl.classList.add('hidden'); // add the hidden dice command

let currentScore = 0;
// Reacting to clicking the roll botton. Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a ramdom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1; // dice is here b/c we want to generate a new number each roll. Trunc removes any decimal to a whole.
  console.log(dice);
  //2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`; // imagen name, to load an emagen of the dice
  //3. Check for rolled 1; if true, switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice; // += means current = current
    current0El.textContent = currentScore; // adding the score to the selected player......CHANGE LATER
  } else {
    //switch to next player
  }
});
