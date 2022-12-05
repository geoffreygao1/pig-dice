// Business Logic

function Player() {
  this.playerName = '';
  this.score = 0;
}

Player.prototype.addName = function (inputName) {
  this.playerName = inputName;
}


function Game() {
  this.numOfDice = 0;
  this.playerList = [];
  this.currentTurn = 0;
  this.scoreCounter = 0;
  this.rollCounter = 0;
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
  this.endTurn();
  if (this.checkWin()) {
    return true;
  };
}

Game.prototype.roll = function () {
  let currentPlayer = this.playerList[this.currentTurn];
  let rollValue = this.rollDice();
  if (rollValue !== 1) {
    this.scoreCounter += rollValue;
  } else {
    this.scoreCounter = 0;
    this.endTurn();
  }
  return rollValue;
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
      return true;
      break;
    }
  }
}

// UI Logic
function updateFields(game) {
  let currentPlayerName = document.getElementById('currentPlayerName');
  currentPlayerName.innerText = 'Player Name: ' + game.playerList[game.currentTurn].playerName;
  let currentRollCounter = document.getElementById('currentRollCounter');
  currentRollCounter.innerText = 'Current Roll Streak Counter: ' + game.scoreCounter;
  let playerOneScore = document.getElementById('playerOneScore');
  playerOneScore.innerText = game.playerList[0].score;
  let playerTwoScore = document.getElementById('playerTwoScore');
  playerTwoScore.innerText = game.playerList[1].score;
}

function startGame() {
  //initialize game and add players
  let newGame = new Game();
  let playerOne = new Player();
  let playerTwo = new Player();
  newGame.addPlayer(playerOne);
  newGame.addPlayer(playerTwo);

  //Sets random order
  newGame.currentTurn = Math.floor(Math.random() * 2);

  //Populates Player Scorecards
  playerOne.playerName = document.getElementById("playerOne").value;
  document.getElementById('playerOneTitle').innerText = playerOne.playerName + "'s score";
  playerTwo.playerName = document.getElementById("playerTwo").value;
  document.getElementById('playerTwoTitle').innerText = playerTwo.playerName + "'s score";
  updateFields(newGame);

  //Roll and Hold Button Handlers
  const rollButton = document.getElementById("roll")
  const holdButton = document.getElementById("hold")
  rollButton.addEventListener('click', function () {
    let newRoll = newGame.roll();
    if (newRoll > 1) {
      document.getElementById('rollMessage').innerText = "You rolled a " + newRoll;
    } else {
      document.getElementById('rollMessage').innerText = "You rolled a 1, next player's turn!";
    }
    updateFields(newGame);
  });
  holdButton.addEventListener('click', function () {
    let gameResult = newGame.hold();
    if (gameResult) {
      for (let i = 0; i < newGame.playerList.length; i++) {
        if (newGame.playerList[i].score >= 100) {
          document.getElementById('rollMessage').innerText = 'Player ' + (i + 1) + ' has won. They have a score of ' + newGame.playerList[i].score;
        } else {
        }
      }
    } else {
      document.getElementById('rollMessage').innerText = "The player has decided to hold. Next Player's turn!";
    }
    updateFields(newGame);
  })
}

window.addEventListener('load', function () {
  document.getElementById('start').addEventListener('click', function () {
    startGame();
  });
});


//Test code
// let testPlayer = new Player();
// let testPlayer2 = new Player();
// let testGame = new Game();
// testGame.addPlayer(testPlayer);
// testGame.addPlayer(testPlayer2);
