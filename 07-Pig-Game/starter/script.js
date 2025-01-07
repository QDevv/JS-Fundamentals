'use strict';
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const Hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

// console.log(current1.textContent);

// score0EL.textContent = 0;
// score1EL.textContent = 0;
// let currentScore = 0;
// dice.classList.add('hidden');

// let playing = true;

// let scores = [0, 0];

// let ActiveScore = 0;
let scores, currentScore, ActiveScore, playing;

let init = () => {
  scores = [0, 0];
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  currentScore = 0;
  ActiveScore = 0;
  dice.classList.add('hidden');
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');

  playing = true;
};

init();

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

const switch_ = () => {
  document.getElementById(`current--${ActiveScore}`).textContent = 0;
  ActiveScore = ActiveScore === 0 ? 1 : 0;
  currentScore = 0;

  document.querySelector(`.player--0`).classList.toggle('player--active');
  document.querySelector(`.player--1`).classList.toggle('player--active');
};

function diceRoll() {
  if (playing) {
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNum}.png`;

    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(`current--${ActiveScore}`).textContent =
        currentScore;
      // console.log(currentScore);
    } else {
      switch_();
    }
  }
}

btnRoll.addEventListener('click', diceRoll);

function saveYourScore() {
  // Add current score to active player score
  if (playing) {
    scores[ActiveScore] += currentScore;

    document.getElementById(`score--${ActiveScore}`).textContent =
      scores[ActiveScore];

    // check if player score is >= 100
    if (scores[ActiveScore] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${ActiveScore}`)
        .classList.add('player--winner');
    }

    switch_();
  }
}

Hold.addEventListener('click', saveYourScore);

// let saveYourScore = () => {
//   scores[ActiveScore] += currentScore;
//   document.querySelector(`score--${ActiveScore}`) = scores[ActiveScore];
// }

// saveYourScore()

// let resetFunc = () => {};

newGame.addEventListener('click', init);

// scoping
// Scoping ask the question where do variables live? or where can we access a certain variable and where not?

// There are 3 types of scoping in JS.
// - The Global scope
// - The function scope
// - The Block scope

// Only let and const variable are block-scoped. Variable declared with VAR ends up in the nearest function scope(VAR is function-scoped)

// Lexical scoping
// The rules of where we can access variables are based on where in the code functions and blocks are written

// Scope chaining
// Every scopes always has access to all variables in its outer scopes. This is the scope chain

// when a variable is not on the current scope, the engine looks up in the scope chain until it finds the variable it is looking for. This called variable look up

// scope chain is a one way street; a scope will never have access to variables in an inner scope

// the order of function calls does not affect scope chain
