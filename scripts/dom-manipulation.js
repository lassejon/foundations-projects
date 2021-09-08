const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#results");
const scores = document.querySelector("#scores");
const scoresResult = document.querySelector("#scores-results");

rockBtn.addEventListener('click', () => {game(rockBtn.id, computerPlay())});
paperBtn.addEventListener('click', () => {game(paperBtn.id, computerPlay())});
scissorsBtn.addEventListener('click', () => {game(scissorsBtn.id, computerPlay())});
