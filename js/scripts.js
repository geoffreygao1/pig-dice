// Business Logic

function Player() {
  this.playerName = '';
  this.score = 0;
  // this.turn = new Turn();
}

Player.prototype.addName = function (inputName) {
  this.playerName = inputName;
}


function Game() {
  // this.numOfDice = 0;
  this.playerList = [];
  this.currentTurn = 0;
  this.scoreCounter = 0;
}

Game.prototype.addPlayer = function (player) {
  this.playerList.push(player);
}

Game.prototype.rollDice = function () {
  let rand = Math.random() * 6;
  let result = Math.floor(rand) + 1;
  return result;
}

Game.prototype.hold = function () {
  let currentPlayer = this.playerList[this.currentTurn];
  let scoreCounter = this.scoreCounter;
  currentPlayer.score += scoreCounter;
  this.scoreCounter = 0;
  console.log('Player ' + this.currentTurn + ' Score: ' + currentPlayer.score);
  this.endTurn();
  console.log('Current Turn: ' + this.currentTurn);
  this.checkWin();
}

Game.prototype.roll = function () {
  let currentPlayer = this.playerList[this.currentTurn];
  let rollValue = this.rollDice();
  if (rollValue !== 1) {
    this.scoreCounter += rollValue;
    console.log('Player ' + this.currentTurn + ' Rolled a: ' + rollValue);
  } else {
    this.scoreCounter = 0;
    console.log('Player ' + this.currentTurn + ' Rolled a 1. Their turn is over')
    this.endTurn();
    console.log('Current Turn: ' + this.currentTurn);
  }
}

Game.prototype.endTurn = function () {
  if (this.currentTurn === ((this.playerList.length) - 1)) {
    this.currentTurn = 0;
  } else {
    this.currentTurn++;
  }
}

Game.prototype.checkWin = function () {
  for (let i = 0; i < this.playerList.length; i++) {
    if (this.playerList[i].score >= 10) {
      console.log("Player " + i + " has won. Their score is: " + this.playerList[i].score);
      break;
    }
  }
}

