var compWins = 0
var userWins = 0
var tieGames = 0


function getComputerChoice(){
    var selections = ["Rock", "Paper", "Scissors"]
    return selections[randomIntFromInterval(0,2)]
}

function getPlayerChoice(){
    let input = prompt("Rock, Paper, or Scissors?");
    var temp = input.charAt(0).toUpperCase() + input.slice(1);
    
    return temp
}

function playRound(){
    var user = getPlayerChoice()
    var computer = getComputerChoice()
    console.log(computer)

    if(user === computer){
        console.log("TIE GAME")
        tieGames++
    }
    else if (user === "Rock"){
        if(computer === "Paper"){
            console.log("Computer wins "+computer + " beats  " +user)
            compWins++
        }
        if(computer === "Scissors"){
            console.log("User wins "+user + " beats  " +computer)
            userWins++
        }
    }
    
    else if (user === "Paper"){
        if(computer === "Scissors"){
            console.log("Computer wins "+computer + " beats  " +user)
            compWins++
        }
        if(computer === "Rock"){
            console.log("User wins "+user + " beats  " +computer)
            userWins++
        }
    }
    else if (user === "Scissors"){
        if(computer === "Rock"){
            console.log("Computer wins "+computer + " beats  " +user)
            compWins++
        }
        if(computer === "Paper"){
            console.log("User wins "+user + " beats  " +computer)
            userWins++
        }
    }
    else
        console.log("Invalid input")
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function playGame(){
    for (let i = 0; i <5; i++){
        playRound()
    }
    console.log("USER WINS: "+userWins.toString() + " | COMPUTER WINS: "+compWins.toString() + " | TIE GAMES: " + tieGames)
}

playGame()
