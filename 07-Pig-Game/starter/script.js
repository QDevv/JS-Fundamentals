'use strict';
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const Hold = document.querySelector('.btn--hold');

// console.log(current1.textContent);

score0EL.textContent = 0;
score1EL.textContent = 0;
let currentScore = 0;
dice.classList.add('hidden');

let scores = [0, 0];

let ActiveScore = 0;

// let diceArray = [
//   'dice-1.png',
//   'dice-2.png',
//   'dice-3.png',
//   'dice-4.png',
//   'dice-5.png',
//   'dice-6.png',
// ];

// function randomDice() {
//   let randomNum = Math.floor(Math.random() * diceArray.length);
//   dice.setAttribute('src', diceArray[randomNum]);
//   dice.classList.remove('hidden');

//   if (diceArray[randomNum] !== 'dice-1.png') {
//     // let setCurrent = current.textContent
//     console.log(typeof current0.textContent);
//     currentScore += randomNum + 1;
//     current0.textContent = currentScore;
//   } else {
// current.textContent = 0;
// score0EL.textContent = 0;
// let randomNum = Math.floor(Math.random() * diceArray.length);
// dice.setAttribute('src', diceArray[randomNum]);
// dice.classList.remove('hidden');
// // let setCurrent = current.textContent
// console.log(typeof current.textContent);
// current2.textContent = Number(current2.textContent) + randomNum + 1;
//   }
// }
// btnRoll.addEventListener('click', randomDice);

// randomDice ();

function diceRoll() {
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${randomNum}.png`;

  if (randomNum !== 1) {
    currentScore += randomNum;
    document.getElementById(`current--${ActiveScore}`).textContent =
      currentScore;
    // console.log(currentScore);
  } else {
    document.getElementById(`current--${ActiveScore}`).textContent = 0;
    ActiveScore = ActiveScore === 0 ? 1 : 0;
    currentScore = 0;

    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
  }
}

btnRoll.addEventListener('click', diceRoll);

function saveYourScore() {
  console.log(`hold button`);
  scores[ActiveScore] += currentScore;
  console.log(scores[ActiveScore]);
  console.log(currentScore);
  document.getElementById(`score--${ActiveScore}`).textContent =
    scores[ActiveScore];
}

Hold.addEventListener('click', saveYourScore);

// let saveYourScore = () => {
//   scores[ActiveScore] += currentScore;
//   document.querySelector(`score--${ActiveScore}`) = scores[ActiveScore];
// }

// saveYourScore()
