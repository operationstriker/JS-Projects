
// User logic, Math Random

const Result = document.getElementById("Result");
const choices = ["ROCK", "PAPER", "SCISSOR"];

const PlayerResult = document.getElementById("PlayerResult");
const ComputerResult = document.getElementById("ComputerResult");
const OutputResult = document.getElementById("OutputResult") 

const PlayerScore = document.getElementById("PlayerScore");
const ComputerScore = document.getElementById("ComputerScore")

let PlayerCount = 0;
let ComputerCount = 0;

function rockfunc() {
   PlayerResult.textContent = "PLAYER: ROCK"
   ComputerAnswer()
   if(ComputerResult.textContent == "COMPUTER: ROCK") {
    OutputResult.textContent = "Draw"
    // draw
   } else if(ComputerResult.textContent == "COMPUTER: PAPER") {
     OutputResult.textContent = "You Lose"

     ComputerCount +=1
     ComputerScore.textContent = ComputerCount
     
   } else {
    OutputResult.textContent = "You Win"
    PlayerCount +=1
     PlayerScore.textContent = PlayerCount
   }
}

function paperfunc() {
   PlayerResult.textContent = "PLAYER: PAPER"
   ComputerAnswer()
   if(ComputerResult.textContent == "COMPUTER: PAPER") {
    OutputResult.textContent = "Draw"
    // draw
   } else if(ComputerResult.textContent == "COMPUTER: SCISSOR") {
     OutputResult.textContent = "You Lose"

     ComputerCount +=1
     ComputerScore.textContent = ComputerCount
   } else {
    OutputResult.textContent = "You Win"
    PlayerCount ++;
    console.log(PlayerCount)
    PlayerScore.textContent = PlayerCount
   }
}

function scissorfunc() {
   PlayerResult.textContent = "PLAYER: SCISSOR"
   ComputerAnswer()

   if(ComputerResult.textContent == "COMPUTER: SCISSOR") {
    OutputResult.textContent = "Draw"
    // draw
   } else if(ComputerResult.textContent == "COMPUTER: ROCK") {
     OutputResult.textContent = "You Lose"

     ComputerCount +=1
     ComputerScore.textContent = ComputerCount
   } else {
    OutputResult.textContent = "You Win"
    PlayerCount +=1
    PlayerScore.textContent = PlayerCount
   }
}

function ComputerAnswer() {
    // Math.random() returns a random number 
    // Math.floor() rounds a number down to the nearest integer,
    ComputerResult.textContent = `COMPUTER: ${choices[Math.floor(Math.random() * choices.length)]}`
}
