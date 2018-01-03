#!/usr/bin/env node
var argv = require('yargs').argv;

class Move {
  constructor(type) {
    this.type = type
  }
  getType() {
    return this.type
  }
}

class Rock extends Move {
  constructor() {
    super('rock')
  }

  beats(type) {
    return type == 'scissors' ?  true :  false
  }
}

class Paper extends Move {
  constructor() {
    super('paper')
  }

    beats(type) {
      return type == 'rock' ?  true :  false
    }
}

class Scissors extends Move {
  constructor() {
    super('scissors')
  }

    beats(type) {
      return type == 'paper' ?  true :  false
    }
}

let moveObjects = {rock: new Rock(), paper: new Paper(), scissors: new Scissors() }
let moveArray = ['rock', 'paper', 'scissors']
let player = argv.move
let playerMove = moveObjects[player]
console.log(`Player plays ${playerMove.getType()}!`);
let x = Math.floor((Math.random() * 3) + 1) - 1;
let compMove = moveObjects[moveArray[x]]
console.log(`Computer plays ${compMove.getType()}!`);

if (compMove == playerMove) {
  console.log('It\s a tie!');
} else if (playerMove.beats(compMove.getType())) {
  console.log('Player wins!');
} else {
  console.log('Computer wins!');
}
