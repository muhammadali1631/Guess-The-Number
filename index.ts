#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
  {
    name: "userguessednumber",
    type: "number",
    message: "Please guess a Number betwwen 1-6",
  },
]);

if(answers.userguessednumber === randomNumber){
    console.log("Congtratulation! you guessed right number")
}else{
    console.log("You Guess Wrong Number")
}