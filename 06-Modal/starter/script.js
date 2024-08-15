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
