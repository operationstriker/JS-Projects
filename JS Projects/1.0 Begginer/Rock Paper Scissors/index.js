
// User logic, Math Random

const Result = document.getElementById("Result");
const choices = ["ROCK", "PAPER", "SCISSOR"];

const PlayerResult = document.getElementById("PlayerResult");
const ComputerResult = document.getElementById("ComputerResult");
const OutputResult = document.getElementById("OutputResult") 

function rockfunc() {
   PlayerResult.textContent = "PLAYER: ROCK"
   ComputerAnswer()
   if(ComputerResult.textContent == "COMPUTER: ROCK") {
    OutputResult.textContent = "Draw"
    // draw
   } else if(ComputerResult.textContent == "COMPUTER: PAPER") {
     OutputResult.textContent = "Lose"
   } else {
    OutputResult.textContent = "Win"
   }
}

function paperfunc() {
   PlayerResult.textContent = "PLAYER: PAPER"
   ComputerAnswer()
   if(ComputerResult.textContent == "COMPUTER: PAPER") {
    OutputResult.textContent = "Draw"
    // draw
   } else if(ComputerResult.textContent == "COMPUTER: SCISSOR") {
     OutputResult.textContent = "Lose"
   } else {
    OutputResult.textContent = "Win"
   }
}

function scissorfunc() {
   PlayerResult.textContent = "PLAYER: SCISSOR"
   ComputerAnswer()

   if(ComputerResult.textContent == "COMPUTER: SCISSOR") {
    OutputResult.textContent = "Draw"
    // draw
   } else if(ComputerResult.textContent == "COMPUTER: ROCK") {
     OutputResult.textContent = "Lose"
   } else {
    OutputResult.textContent = "Win"
   }
}

function ComputerAnswer() {
    // Math.random() returns a random number 
    // Math.floor() rounds a number down to the nearest integer,
    ComputerResult.textContent = `COMPUTER: ${choices[Math.floor(Math.random() * choices.length)]}`
}