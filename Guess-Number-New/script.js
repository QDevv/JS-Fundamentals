let message = document.querySelector(".message");
console.log(message.textContent);

// message.textContent = "o kay";

document.querySelector(".number").textContent = "33";

// document.querySelector(".score").textContent = "11";

// document.querySelector(".guess").value = 20;

console.log(document.querySelector(".guess").value);

let SecretNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".number").textContent = SecretNum;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);
  console.log(guess);

  if (!guess) {
    message.textContent = "No Number";
  } else if (guess === SecretNum) {
    message.textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "";
  } else if (guess > SecretNum) {
    if (score > 1) {
      message.textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "GAME OVER!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < SecretNum) {
    if (score > 1) {
      message.textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "GAME OVER!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
