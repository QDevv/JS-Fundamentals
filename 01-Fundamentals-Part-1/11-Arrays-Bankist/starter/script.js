'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data;
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SLICE

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));

console.log(arr.slice(2, 4));

console.log(arr.slice(-2));
console.log(arr.slice(-1));

console.log(arr.slice());

console.log([...arr]);

//SPLICE// This modifies the original array
// console.log(arr.splice(2));

// console.log(arr.splice(-1));
arr.splice(1, 2);
console.log(arr);

// REVERSE - mutates the original array

arr = ['a', 'b', 'c', 'd', 'e', 'f'];

const arr2 = ['i', 'm', 'k'];
arr2.reverse();
console.log(arr2);

// CONCAT
const concatt = arr.concat(arr2);

console.log(concatt);

console.log([...arr, ...arr2]);

console.log(concatt.join('_'));

// AT method -good for method chaining

// const luckyNumbers = [23, 64, 33];

// console.log(luckyNumbers.at(0));

// console.log(luckyNumbers.at(-2));

// console.log(luckyNumbers[1]);

// console.log(luckyNumbers.slice(-1)[0]);

// console.log('jonas'.at(-1));

// FOREACH METHOD - this mutates the original array
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
  console.log(sorted);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  movement > 0
    ? console.log(`you deposited ${movement}`)
    : console.log(`you withdrew ${Math.abs(movement)}`);
}

console.log('--------FOREACH-------');

movements.forEach(function (movement, i, ARR) {
  movement > 0
    ? console.log(`movement ${i + 1}: you deposited ${movement}`)
    : console.log(`movement ${i + 1}: you withdrew  ${Math.abs(movement)}`);
});

// THE CALLBCAK FUNCTION HERE TELLS THE HIGHER ORDER FUNCTION WHAT TO DO

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (key, value, arr) {
  console.log(`${key}: ${value}`);
});

const currency2 = new Set(['USD', 'GBP', 'EURO']);

currency2.forEach(function (key, value) {
  console.log(`${key}: ${value}`);
});

function displayMovement(account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i, arr) {
    let TransactionType = mov > 0 ? 'deposit' : 'withdrawal'; ////////////////////
    //////////l
    console.log(TransactionType);

    let html = `<div class="movements__row">
          <div class="movements__type movements__type--${TransactionType}">${
      i + 1
    } ${TransactionType}</div>
          
          <div class="movements__value">€${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  // console.log(containerMovements.innerHTML);
}

// MAP - CREATES A NEW ARRAY
// FILTER - RETURNS A NEW ARRAY CONATINING ELEMENTS THAT PASSED A CERTAIN CONDITION
// REDUCE BOILS DOWN ('REDUCE') ALL THE ELEMENT DOWN TO A SINGLE DIGIT(E.G ADDING ALL ELEMENT TOGETHER )

let euroUsd = 1.1;
const newMovement = movements.map(movement => euroUsd * movement.toFixed(2));

console.log(newMovement);
console.log(movements);

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `movement ${i + 1}: you ${mov > 0 ? 'deposit' : 'withdraw'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions.join('\n'));

// function createUserName(user) {
//   const userName = user
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return userName;
// }
// const user = 'Martin Luther King';

// console.log(createUserName('Martin Luther King'));

// console.log(userName);

function createUserName(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}
// NO NEED TO RETURN BECAUSE WE ARE NOT CREATING A NEW VALUE. WE ARE JUST ALTERING AN EXISTING VALUE

function UpdateUI(acc) {
  displayMovement(acc.movements);

  //Display Balance //
  calcBalance(acc);

  //Display Summary//
  calcDisplaySummary(acc.movements);
}

createUserName(accounts);

console.log(accounts);

const deposits = movements.filter(move => {
  return move > 0;
});

console.log(deposits);

const withdrawal = movements.filter(move => move < 0);

console.log(withdrawal);

// REDUCE

const balance = movements.reduce((acc, curr) => acc + curr);

console.log(balance);

const calcBalance = function (acc) {
  const sumBalance = acc.movements.reduce((acc, curr) => acc + curr);
  acc.balance = sumBalance;
  labelBalance.textContent = `€${acc.balance}`;
};

// let accArr = [];
const getMax = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, movements[0]);

console.log(getMax);

// function calcAge(ageArr) {
//   const humanAge = ageArr.map((age, i, arr) => {
//     if (age <= 2) return age * 2;
//     else return 16 + age * 4;
//   });
//   console.log(humanAge);

//   const matureDodgs = humanAge.filter((age, i) => {
//     return age >= 18;
//   });
//   console.log(matureDodgs);

//   const matureDogsAvgAge = matureDodgs.reduce((acc, curr) => {
//     return acc + curr;
//   });
//   console.log(matureDogsAvgAge);

//   return matureDogsAvgAge / matureDodgs.length;
// }

// console.log(calcAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAge([16, 6, 10, 5, 6, 1, 4]));

const euroUsd2 = 1.2;
let totalDeposit = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroUsd2)
  .reduce((acc, mov) => acc + mov, 0);

console.log(Math.trunc(totalDeposit));

function calcDisplaySummary(move) {
  const income = move.filter(mov => mov > 0).reduce((acc, mov) => acc + mov);

  labelSumIn.textContent = `€${Math.trunc(income)}`;

  const outgoing = move.filter(mov => mov < 0).reduce((acc, mov) => acc + mov);

  labelSumOut.textContent = `€${Math.abs(Math.trunc(outgoing))}`;

  const interest = move
    .filter(mov => mov > 0)
    .map(mov => mov * 0.012)
    .filter(int => int > 1)
    .reduce((acc, mov) => acc + mov);

  labelSumInterest.textContent = `€${interest}`;

  console.log(interest);
}

calcDisplaySummary(account1.movements);

function outgoingSummary(move) {}

outgoingSummary(account1.movements);

const humanAge2 = ageArr =>
  ageArr
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)

    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(humanAge2([5, 2, 4, 1, 15, 8, 3]));

console.log(humanAge2([16, 6, 10, 5, 6, 1, 4]));

const gr = movements.find(mov => mov < 0);

console.log(gr);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account.pin);

for (const acc of accounts) {
  acc.owner === 'Jessica Davis' ? console.log(acc) : '';
}
let currentAccount;
// BANKIST: CHECK LOGIN //
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & Message //
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    UpdateUI(currentAccount);
    //Display Movements //
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    UpdateUI(currentAccount);
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (currentAccount.movements.some(acc => acc >= 0.1 * amount) && amount > 0) {
    currentAccount.movements.push(amount);
  }
  inputLoanAmount.value = '';
  UpdateUI(currentAccount);
});

console.log(accounts);

btnClose.addEventListener('click', function (e) {
  e.preventDefault(e);

  console.log(currentAccount.username, inputCloseUsername.value);

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    let index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    console.log('i dey here');

    accounts.splice(index, 1);
    console.log(accounts);

    containerApp.style.opacity = 0;
  }
});

// SPLICE MUTATES THE ORIGINAL ARRAY

// some and every//
// some improves the includes method by adding other conditions like > and <
console.log(movements.includes(-130));

console.log(movements.some(mov => mov > 1000));

// EVERY
// ALL THE Element OF THE ARRAY MUST SATISFY THE CONDITION

let outcome = account1.movements.every(mov => mov > 0);

console.log(outcome);

console.log(account4.movements.every(mov => mov > 0));

// seperate callback //

let deposits3 = mov => mov > 0;

console.log(movements.some(deposits3));

// FLAT //

const nestedArr = [[[1, 2], 3], [[4, 5], 6], 7, 8, 9];

console.log(nestedArr.flat(2));

const allMovements = accounts.map(acc => acc.movements);

console.log(allMovements);
let sumOfAllMovements = allMovements.flat().reduce((acc, curr) => acc + curr);

console.log(sumOfAllMovements);

// FLATMAP //
let allMovements2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr);
console.log(allMovements2);

// SORT //

const owners = ['jonah', 'paul', 'kudus'];

console.log(owners.sort());

// return < 0 = A, B
// return > 0 = B, A

// ASCENDING;
// movements.sort((a, b) => {
//   if (a > b) return 1; //switch
//   if (b > a) return -1; //keep
// });

movements.sort((a, b) => a - b);

// DESCENDING
// movements.sort((a, b) => {
//   if (a > b) return -1; //KEEP
//   if (b > a) return 1; //SWITCH
// });
movements.sort((a, b) => b - a);
