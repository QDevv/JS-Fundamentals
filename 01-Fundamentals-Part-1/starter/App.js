// Test Data 1
// let markHeight = 1.69;
// let markWeight = 78;

// let johnHeight = 1.95;
// let johnWeight = 92;

// // Calculate markBmi

// let markBmi = markWeight/markHeight**2
// console.log(markBmi);

// let johnBmi = johnWeight/johnHeight**2
// console.log(johnBmi);

// let markHigherBmi = markBmi > johnBmi

// console.log(markHigherBmi);

// // challenge 2

// if (markBmi > johnBmi) {
//     console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}`);
// }

// // challenge 4

// billValue = 430;

// let Tip = billValue >= 50 && billValue <= 300 ? 0.15*billValue : 0.2*billValue;

// console.log(`The billvalue is ${billValue}, the tip is ${Tip} and the final value is ${billValue + Tip}`);

// let calcTip = (billValue) => {
//   if (billValue > 50 && billValue < 300) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// };

// // let tip = calcTip(100);
// // console.log(tip);

// const bills = [125, 555, 44];

// const Tipp = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const Total = [
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[2]) + bills[2],
// ];

// console.log(Tipp);
// console.log(Total);

// let calctippp = (billValue) =>
//   billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;

// let tip = calctippp(200);

// console.log(tip);

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const element = array[i];
// }
let John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcbmi() {
    return this.mass / this.height ** 2;
  },
};

let mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcbmi() {
    return this.mass / this.height ** 2;
  },
};

if (John.calcbmi() > mark.calcbmi()) {
  console.log(
    `${John.fullName}'s BMI(${John.calcbmi()}) is greater than ${
      mark.fullName
    }'s BMI(${mark.calcbmi()})}`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI(${mark.calcbmi()}) is greater than ${
      John.fullName
    }'s BMI(${John.calcbmi()})}`
  );
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

let calctippp = (billValue) =>
  billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;

for (let i = 0; i < bills.length; i++) {
  tips.push(calctippp(bills[i]));
  total.push(calctippp(bills[i]) + bills[i]);
}
console.log(tips, total);

let sum = 0;
const calcAverage = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // console.log(typeof sum);
  }

  console.log(sum);
  return sum / arr.length;
};

// calcAverage([2, 3, 4, 5, 6]);
let arrTotal = calcAverage([2, 3, 4, 5, 6]);
console.log(arrTotal);
