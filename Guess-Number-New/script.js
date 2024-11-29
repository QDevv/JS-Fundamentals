let message = document.querySelector(".message");
console.log(message.textContent);

// message.textContent = "o kay";

// document.querySelector(".number").textContent = "33";

// document.querySelector(".score").textContent = "11";

// document.querySelector(".guess").value = 20;

console.log(document.querySelector(".guess").value);

let SecretNum = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = SecretNum;

let score = 20;

let displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

let displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);
  console.log(guess);

  if (!guess) {
    // message.textContent = "No Number";
    displayMessage("No Number");
  } else if (guess === SecretNum) {
    // message.textContent = "Correct Number!";
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = SecretNum;
  } else if (guess !== SecretNum) {
    if (score > 1) {
      // message.textContent = guess > SecretNum ? "too high" : "too low";
      displayMessage(guess > SecretNum ? "too high" : "too low");
      score--;
      // document.querySelector(".score").textContent = score;
      displayScore(score);
    } else {
      document.querySelector(".message").textContent = "GAME OVER!";
      document.querySelector(".score").textContent = 0;
    }
  }
  //  else if (guess > SecretNum) {
  //   if (score > 1) {
  //     message.textContent = "Too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     message.textContent = "GAME OVER!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < SecretNum) {
  //   if (score > 1) {
  //     message.textContent = "Too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "GAME OVER!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  if (
    Number(document.querySelector(".guess").value) === SecretNum &&
    Number(document.querySelector(".score").textContent) >
      Number(document.querySelector(".highscore").textContent)
  ) {
    document.querySelector(".highscore").textContent =
      document.querySelector(".score").textContent;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  SecretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = SecretNum;
  document.querySelector(".guess").value = "";
  message.textContent = "start guessing...";
  // document.querySelector(".score").textContent = score;
  displayScore(score);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});

// let HighScore = () => {

// };
