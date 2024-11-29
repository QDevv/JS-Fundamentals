'use strict';
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

score0EL.textContent = 0;
score1EL.textContent = 0;

dice.classList.add('hidden');

let diceArray = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
];

function randomDice(params) {
  let randomNum = Math.floor(Math.random() * diceArray.length);
  dice.setAttribute('src', diceArray[randomNum]);
  dice.classList.remove('hidden');
}
btnRoll.addEventListener('click', randomDice);

// randomDice();
