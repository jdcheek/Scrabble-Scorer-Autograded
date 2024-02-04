// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }

    }
  }
  return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  return input.question("Let's play some scrabble! Enter a word: ");
};

let simpleScorer = function(word) {
  return word.trim().length
};

let vowelBonusScorer = function(word) {
  const vowels = ["A", "E", "I", "O", "U"]
  let score = 0
  word = word.toUpperCase().trim()
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      score += 3
    } else {
      score++
    }
  }
  return score
};

let scrabbleScorer = function() {

};

const scoringAlgorithms = [{ name: 'Simple Score', description: 'Each letter is worth 1 point.', scorerFunction: simpleScorer }, { name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scorerFunction: vowelBonusScorer }, { name: 'Scrabble', description: 'The traditional scoring algorithm.', scorerFunction: oldScrabbleScorer }];

function scorerPrompt() {
  let userSelectedAlgorithm = input.question('Which scoring algorithm would you like to use? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2: ')
  for (let i = 0; i < scoringAlgorithms.length; i++) {
    if (Number(userSelectedAlgorithm) === i) {
      return scoringAlgorithms[i]
    }
  }
}

function transform() { };

let newPointStructure;

function runProgram() {
  let word = initialPrompt();
  let selectedAlgorithm = scorerPrompt()
  console.log(`Score for '${word}': ${selectedAlgorithm.scorerFunction(word)}`)
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};
