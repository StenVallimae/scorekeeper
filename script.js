const p1Button = document.querySelector("#pOne");
const p2Button = document.querySelector("#pTwo");
const p1Display = document.querySelector("#ShowPlayerOne");
const p2Display = document.querySelector("#ShowPlayerTwo");
const resetButton = document.querySelector("#reset");
const winScores = document.querySelector("#winScores");

const p1 = {
  button: document.querySelector("#pOne"),
  display: document.querySelector("#ShowPlayerOne"),
  score: 0,
};
const p2 = {
  button: document.querySelector("#pTwo"),
  display: document.querySelector("#ShowPlayerTwo"),
  score: 0,
};

let p1Score = 0;
let p2Score = 0;
let maxScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === maxScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

resetButton.addEventListener("click", reset);

winScores.addEventListener("change", () => {
  maxScore = parseInt(winScores.value);
  reset();
});

function reset() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
  isGameOver = false;
}
