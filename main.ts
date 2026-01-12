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
  const userOperation = prompt("Welcome to your 2025-26 hockey season.\nPlease select what you would like to do (select by typing the letter in front of the action)\nA. Input details of the season so far\nB. Add a new game to your season\nC. Display season statistics\nD. End season\n") || "";

  // create if statements

  // Input team stats so far 
  if (userOperation === "a") {
    addSeasonSoFar();
  }

  // Add game to season stats 
  if (userOperation === "b") {
    addSingleGame();
    
  }


// Display season stats so far 
  if (userOperation === "c") {
    displayTeamStatistics();
  }

  // End season 
  if (userOperation === "d") {
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
  const overtime = prompt("Did the game end in overtime? (Y/N)")

  // determine result of the game 
  if (goalsFor > goalsAgainst) {

    // win 
    if (overtime === "Y") {
      season[2] = season[2] + 1;
    } else {
      season[1] = season[1] + 1;
    }
  } else if (goalsAgainst > goalsFor) {

    // loss
    if (overtime === "Y") {
      season[4] = season[4] + 1;
    } else {
      season[3] = season[3] + 1;
    }
  }
  // update season array with the result 
  season[0] = season[0] + 1;
  season[5] = season[5] + goalsFor
  season[6] = season[6] + goalsAgainst

  console.log(season)
}



console.log("\nDone.");
