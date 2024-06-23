#!/usr/bin/env node

import inquirer from "inquirer";

// Initialize a random number to be guessed by the user
let randomNum = Math.floor(Math.random()* 6 + 1);

// Prompt the user to guess the number
const answer = await inquirer.prompt([
  {
    name: "UserGuessedNumber",
    type: "number",
    message: "Guess the number between 1-6 ",
  },
]);

console.log(answer);

// Check if the user's guessed number is correct
if (answer.UserGuessedNumber === randomNum) {
  console.log("Congratulations! you've guessed the correct number.");
} else {
  console.log("You've guessed the wrong number!");
}
