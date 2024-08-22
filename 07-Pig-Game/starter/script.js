'use strict';

//We are starting by placing the score to 0 and hidding the dice
//We are selecting the two elements by their unique id inside the class name (score -- 0 and score -- 1 )
// # means ID

//Selecting elements (El)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const scores = [0, 0]; // big scrores of the game stored as arrays (arrays are 0 based that is whhy player is 0 and 1)
let currentScore = 0;
let activePlayer = 0;
let playing = true; // boolean that states the game is being played. If false it does not allow to play the game.

const switchPlayer = function () {
  // no peramiter needed since the code is the exact same in both scenarios
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); // toggle-> add the class if is not there and remove it if is there
  player1El.classList.toggle('player--active'); // re assingng player, checking if player is 0 and changing to 1
};

// Reacting to clicking the roll botton. Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // boolean and no need to write any condition
    //1. Generating a ramdom dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // dice is here b/c we want to generate a new number each roll. Trunc removes any decimal to a whole.

    //2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // imagen name, to load an emagen of the dice
    //3. Check for rolled 1; if true, switch to next player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice; // += means current = current
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // set score on active player
    } else {
      //switch to next player
      switchPlayer(); // calling the function
    }
  }
});

// have an acction once the btn hold is clicked
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore; // score at current player = plus the current score ---> score[1] = score[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // dynamicly replacing by `` template string

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden'); // removing the dice once game is won!
      document
        .querySelector(`.player--${activePlayer}`) // need a . selecting a class. Elements by ID no need for .
        .classList.add('player--winner'); // select the player -- add class name
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // remove active player and display only the winner
    } else {
      //Switch player
      switchPlayer();
    }
  }
});
