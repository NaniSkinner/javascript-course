'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenMoal = document.querySelectorAll('.show-modal');
console.log(btnsOpenMoal);

for (let i = 0; i < btnsOpenMoal.lenght; i++)
  btnsOpenMoal[i].addEventListener('click', function () {
    console.log('Button clicked');
  });

// This comment is just to show an example of updating a repo.

// 1. After we make a change, we need to make sure we are in the right file path within the terminal

// 2. Once we've done that, we'll then update the github repo by running these commands:

// `git add .`
// `git commit -m "Updating with Github Command Comments"
// `git push`
