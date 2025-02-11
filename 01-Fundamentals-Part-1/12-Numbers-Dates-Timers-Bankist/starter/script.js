'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  console.log(sort);

  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    let date = new Date(acc.movementsDates[i]);

    let year = date.getFullYear();
    let Month = `${date.getMonth()}`.padStart(2, 0);
    let day = `${date.getDate()}`.padStart(2, 0);
    let hr = `${date.getHours()}`.padStart(2, 0);
    let min = `${date.getMinutes()}`.padStart(2, 0);

    let displayDate = `${day}/${Month}/${year}, ${hr}:${min}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(
      int =>
        // console.log(arr);
        int >= 1
    )
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};
let currentAccount;

// FAKE LOGIN //
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// sec = sec < 10 ? '0' + sec : sec;

// console.log(sec);

// hr = hr < 10 ? '0' + hr : hr;
// day = day < 10 ? '0' + day : day;
// Month = Month < 10 ? '0' + Month : Month;

// labelDate.textContent = `${day}/${Month}/${year}, ${hr}:${sec}`;
///////////////////////////////////////
// Event handlers

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //show dates//

    let now1 = new Date();
    let year = now1.getFullYear();
    let Month = `${now1.getMonth()}`.padStart(2, 0);
    let day = `${now1.getDate()}`.padStart(2, 0);
    let hr = `${now1.getHours()}`.padStart(2, 0);
    let min = `${now1.getMinutes()}`.padStart(2, 0);
    let sec = `${now1.getSeconds()}`.padStart(2, 0);

    labelDate.textContent = `${day}/${Month}/${year}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
console.log(sorted);

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  console.log(sorted);

  sorted = !sorted;
  console.log(sorted);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// WHEN JS SEES + OPERATION, IT AUTOMATICALLY DO TYPE COERCION(change the preceeding value to a number, if was a string written in number)

// Converting STRINGS TO NUMBERS
console.log(+'23');

// PARSING - GET RID OF UNNECCESARY SYMBOLS/letters THAT ARE NOT NUMBERS
console.log(Number.parseInt('30.5pddddddddddx$%^&^'));

//parsefloat - get rid of unneccesary letters/symbols without removing the decimal

console.log(Number.parseFloat('2.5rem'));

console.log(Number.parseInt('2.5rem'));

// ISNAN - use to check if value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(20 / 0));
console.log(Number.isNaN('20cv'));
console.log(Number.isNaN(+'3EE'));

// ISFINITE - use to check if value is a number

console.log(Number.isFinite(33));
console.log(Number.isFinite('33'));
console.log(Number.isFinite('r4'));
console.log(Number.isFinite(4 / 3));

//isInteger - use to check whole numbers
console.log(Number.isInteger(32));
console.log(Number.isInteger('22'));
console.log(Number.isInteger(3 / 8));

// MATHS FUNCTION
console.log(Math.sqrt(64));
console.log(25 ** (1 / 2));

console.log(8 ** (1 / 3));

console.log(Math.max(23, 45, 4, 6, 8));
console.log(Math.min(3, 4, 7, 33));

// calculate radius of a circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (max, min) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

console.log(Math.round(20.2));
console.log(Math.ceil(20.2));
console.log(Math.floor(20.2));
console.log((2.5).toFixed(0));
console.log((2.435).toFixed(1));
console.log((2.776).toFixed(2));

// REMAINDER % //

console.log(5 % 3);
console.log(14 % 6);

let isEven = n => n % 2 === 0;

// whenever you want to do something every NTH TIME - THE REMAINDER WILL COME IN HANDY
console.log(isEven(3));
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 2 !== 0) row.style.backgroundColor = 'blue';
  });
});

const diameter = 234_434_000_000;
const pi = 3.141_5;

console.log(diameter, pi);

console.log(Number.parseFloat('23'));

// BigInt//

console.log(39555556577777743223344n * 1000n);

console.log(34093n > 33334);

let num = 34;
let huge = 10000000000000000000n;

console.log(BigInt(num) * huge);

console.log(7000n == 7000);

console.log(typeof 20n);

console.log(20n == '20');

console.log(20n > 15);

console.log(huge + ' is really big');

// BIGINT DOESNT WORK WITH MATH FUNCTION

// DIVISION
console.log(12n / 3n);
// console.log();

// DATES AND TIME //
let now = new Date();
console.log(now);

let fixedDate = new Date(2034, 10, 4, 3, 14, 22);

console.log(fixedDate.getFullYear());
console.log(fixedDate.getMonth());
console.log(fixedDate.getDate());
console.log(fixedDate.getMinutes());
console.log(fixedDate.getSeconds());

console.log(fixedDate.getTime()); //number of milliseconds since 1970 till fixedDate

console.log(new Date(2046219262000));

console.log(Date.now());

const future = new Date(2033, 10, 19, 15, 23);

console.log(+future);

const calcDaysPassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24);

console.log(calcDaysPassed(new Date(2033, 10, 19), new Date(2033, 10, 25)));
