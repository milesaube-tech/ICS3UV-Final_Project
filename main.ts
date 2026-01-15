/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2026-01-11
 * @fileoverview This program calculates team stats and then outputs them
 */

// constants and variables
let finished: number = 1;
const season: number[] = new Array(7); // new array for season details 
// index 0 games played
season[0] = 0 
// index 1 wins
season[1] = 0 
// index 2 overtime wins 
season[2] = 0 
//index 3 losses 
season[3] = 0 
//index 4 overtime losses 
season[4] = 0 
//index 5 goals for 
season[5] = 0 
//index 6 goals against
season[6] = 0 

// the basic menu to select the action you would like to perform
while (finished === 1) {
  // User input 
  const userOperation = prompt("Welcome to your 2025-26 hockey season.\nPlease select what you would like to do (select by typing the letter in front of the action)\nA. Input details of the season so far\nB. Add a new game to your season\nC. Display season statistics\nD. Simulate season\nE. Simulate Game\nF. End season\n") || "";
  
  const menuOption: string = userOperation.toLowerCase()

  // create if statements

  // Input team stats so far 
  if (menuOption === "a") {
    addSeasonSoFar();
  }

  // Add game to season stats 
  if (menuOption === "b") {
    addSingleGame();
  }


// Display season stats so far 
  if (menuOption === "c") {
    displayTeamStatistics();
  }

  // Display season stats so far 
  if (menuOption === "d") {
    simulateSeason();
  }

  // Display season stats so far 
  if (menuOption === "e") {
    simulateGame();
  }

  // End season 
  if (menuOption === "f") {
    finished = 0;
  }
}  


// create function for adding season so far 
function addSeasonSoFar():void {
  // ask how many games have been played
  const gamesToEnter = Number (prompt("How many games has your team played so far?")) 
  for (let counter: number = 1; counter <= gamesToEnter; counter++) {
    addSingleGame()
  }
}

// create function for adding single game 
function addSingleGame(): void {
  // Prompt user for what was the outcome of the game 
  const goalsFor = Number(prompt("How many goals did your team score in this game?"));
  const goalsAgainst = Number(prompt("How many goals did the other team score this game?"));
  const overtime = prompt("Did the game end in overtime? (Yes/No)")
  
  // determine result of the game 
  if (goalsFor > goalsAgainst) {

    // win 
    if (overtime === "Yes") {
      season[2] = season[2] + 1;
    } else {
      season[1] = season[1] + 1;
    }
  } else if (goalsAgainst > goalsFor) {

    // loss
    if (overtime === "Yes") {
      season[4] = season[4] + 1;
    } else {
      season[3] = season[3] + 1;
    }
  }
  // update season array with the result 
  season[0] = season[0] + 1;
  season[5] = season[5] + goalsFor
  season[6] = season[6] + goalsAgainst

  //console.log(season)
}

// create displau team statistics funtion 
function displayTeamStatistics(): void {
  // set stats 
  const gamesPlayed: number = season[0];
  const wins: number = season[1];
  const overtimeWins: number = season[2];
  const losses: number = season[3];
  const overtimeLosses: number = season[4];
  const goalsFor: number = season[5];
  const goalsAgainst: number = season[6];
  
  // calculate points 
  const points: number = (wins * 2) + (overtimeWins * 2) + (overtimeLosses * 1);

  // calculate goal differential 
  const goalDifferential: number = goalsFor - goalsAgainst;

  // final outputing of all the stats
  console.log("----Team Season Statistics----");
  console.log("Games Played: " + gamesPlayed);
  console.log("Wins: " + wins);
  console.log("OvertimeWins: " + overtimeWins);
  console.log("Losses: " + losses);
  console.log("Overtime Losses: " + overtimeLosses);
  console.log("Goals For: " + goalsFor);
  console.log("Goals Against: " + goalsAgainst);
  console.log("Goal Differential: " + goalDifferential)
  console.log("Points: " + points)
}

// function for simulating one game 
function simulateGame() : void {
  //const goalsFor = Number(prompt("How many goals did your team score in this game?"));
  //const goalsAgainst = Number(prompt("How many goals did the other team score this game?"));
  //const overtime = prompt("Did the game end in overtime? (Yes/No)")

  const randomGoalsFor: number = Math.floor(Math.random() * 10) + 1; 
  // for debugging
  // console.log(randomGoalsFor)
  const randomGoalsAgainst: number = Math.floor(Math.random() * 10) + 1; 
  // for debugging
  // console.log(randomGoalsAgainst)
  const randomOvertime: number = Math.floor(Math.random() * 2) + 1; 
  // for debugging
  // console.log(randomOvertime)

  // determine result of the game 
  if (randomGoalsFor > randomGoalsAgainst) {

    // win 
    if (randomOvertime === 1) {
      season[2] = season[2] + 1;
    } else {
      season[1] = season[1] + 1;
    }
  } else if (randomGoalsAgainst > randomGoalsFor) {

    // loss
    if (randomOvertime === 1) {
      season[4] = season[4] + 1;
    } else {
      season[3] = season[3] + 1;
    }
  }
  // update season array with the result 
  season[0] = season[0] + 1;
  season[5] = season[5] + randomGoalsFor
  season[6] = season[6] + randomGoalsAgainst
}

// function for simulating whole season 
function simulateSeason() : void {
// clear any games inputted 
  // index 0 games played
  season[0] = 0
  // index 1 wins
  season[1] = 0
  // index 2 overtime wins 
  season[2] = 0
  //index 3 losses 
  season[3] = 0
  //index 4 overtime losses 
  season[4] = 0
  //index 5 goals for 
  season[5] = 0
  //index 6 goals against
  season[6] = 0

  //simulate a 32 game season 
  for (let counter: number = 1; counter <= 32; counter++) {
    simulateGame()
  }

}

console.log("\nDone.");
