const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// Mark1 BMI CALCULATIONS
let bmiMark1 = massMark1 / heightMark1 ** 2;
let bmiJohn1 = massJohn1 / heightJohn1 ** 2;

if (bmiMark1 > bmiJohn1) {
  console.log(`Mark's BMI (${bmiMark1})is greater than John's(${bmiJohn1})`);
} else if (bmiJohn1 > bmiMark1) {
  console.log(`Mark's BMI (${bmiMark1})is lesser than John's(${bmiJohn1})`);
}

// Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// console.log(typeof );

console.log("I am " + "23" + " years old");
console.log("24" / "12");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

// Truthy & Falsy Value

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean());

const height = 0;

if (height) {
  console.log(`height is defined`);
}
{
  console.log(`height is undefined`);
}

// Equality Operator

// Equality Operators: == vs. ===
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 22 === 23 -> FALSE
//   console.log("Cool! 23 is an amzaing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// Code challenge 3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let calcAvg = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let DolphinsAvg = calcAvg(97, 112, 101);

let KoalasAvg = calcAvg(109, 95, 123);

console.log(DolphinsAvg, KoalasAvg);
if (DolphinsAvg > KoalasAvg && DolphinsAvg >= 100) {
  console.log(`Dolphins won: ${DolphinsAvg} - ${KoalasAvg}`);
} else if (KoalasAvg > DolphinsAvg && KoalasAvg >= 100) {
  console.log(`Koalas won: ${KoalasAvg} - ${DolphinsAvg}`);
} else if (
  KoalasAvg === DolphinsAvg &&
  DolphinsAvg >= 100 &&
  KoalasAvg >= 100
) {
  console.log(`its a tie`);
} else {
  console.log(`No Winner`);
}

// Ternary Operator
let cutoffMrk = 70;
cutoffMrk >= 70
  ? console.log("You've been admitted")
  : console.log("You didnt meet the cut-off mark");

const billValue = 275;
const Tip =
  billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;

// console.log(Tip);

// console.log(`Tip:${0.15 * billValue}`);
// console.log(`The bill value is ${billValue} and the tip is ${Tip}`);

let calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    return 0.15 * billValue;
  } else {
    return 0.2 * billValue;
  }
};

let Tipp = calcTip(billValue);

console.log(Tipp);

// Array Challenge

let CalcTip = (billValue) => {
  const Tip =
    billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
  return Tip;
};

// calcTip(100)
console.log(calcTip(100));

const bills = [125, 555, 44];

const TipArray = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [
  TipArray[0] + bills[0],
  TipArray[1] + bills[1],
  TipArray[2] + bills[2],
];

console.log(TipArray);

console.log(total);

const jonas = {
  firstName: "Jonas",
  lastName: "schurle",
  age: 43,
  friends: ["Mike", "James", "Toni"],
  Location: "portugal",
  hasDriversLicense: false,
  job: "teacher",
  getSummary: function () {
    console.log(this.hasDriversLicense);
    return `${this.firstName} is a ${this.age} year old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} Driver's License`;
  },
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas["friends"][0]}`
);

console.log(jonas.getSummary());

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (mark.calcBMI() > John.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI(${mark.calcBMI()}) is greater than ${
      John.fullName
    }'s BMI(${John.calcBMI()})`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI(${mark.calcBMI()}) is lower than ${
      John.fullName
    }'s BMI(${John.calcBMI()})`
  );
}

// LOOP
const yearr = [1991, 2002, 2003, 2007];
const age1 = [];

for (let i = 0; i < yearr.length; i++) {
  age1.push(yearr[i]);
  //   age1 += yearr[i];
  console.log(age1);
}

// Loop Challenge

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
  let calctip1 = () => {
    if (bills1[i] >= 50 && bills1[i] <= 300) {
      return 0.15 * bills1[i];
    } else {
      return 0.2 * bills1[i];
    }
  };
  tips1.push(calctip1(bills[i]));
  totals1.push(calctip1(bills[i]) + bills1[i]);
}

console.log(tips1);

console.log(totals1);

let arr = [20, 30, 40];

let calcAverage1 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage1(arr));
const tempHH = [3, -2, -6, 1, "error", 9, 13, 17, 15, 14, 9, 5];
NumericVal = tempHH.filter((val) => typeof val === "number");

let lowest = Math.min(...NumericVal);
let highest = Math.max(...NumericVal);

let Amplitude = highest - lowest;

console.log(Amplitude);

let temp1 = [17, 21, 23];

let temp2 = [12, 5, -5, 0, 4];

let forecastWeather = (temp1) => {
  let result;
  for (let i = 0; i < temp1.length; i++) {
    console.log(temp1[i]);
    console.log(`....${temp1[i]}C in ${temp1.indexOf(temp1[i]) + 1} days`);
  }
};

forecastWeather(temp1);
