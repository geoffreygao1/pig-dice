Describe: Player()

{
      'name': String,
      'score': Number
}

Describe: Game()

{
      'numOfDice': Number,
      'players': [Players]
      'currentTurn': Index of Player
}

functions: 

describe: currentTurn()
explain: returns whos turn it is

describe: checkWin()
explain: returns a message if any player has above 100.

describe: addPlayer()
explain: adds a player to the list of players

describe: chooseFirst()
explain: randomizes who goes first. Generates random currentTurn based on length of index

Describe: Turn()

{
      'scoreCounter': Number
}

functions: Roll, Hold functions are on the Turn prototype

describe: roll()
explain: generates a random number from 1-6 
test: roll()
expected output: integer value between 1 and 6
  
 describe: roll(numOfDice) //for advanced functionality
 explain: Rolls a number of 6 sided dice depending on the input parameter. If any of the dice roll the number 1, outputs a message or runs a function to rollOne. If none of the dice roll the number 1, add the value to Turn.scoreCounter
 test:
 expected output:

 describe: hold()
 explain: Ends the current turn by adding the scoreCounter to the current Player score. Changes the currentTurn property of the Game object to the next player. Resets the scoreCounter

describe: rollOne()
explain: Ends the current turn. Does not add scoreCounter to the current Player score. Changes the currentTurn property of the Game object to the next player. Resets the scoreCounter


