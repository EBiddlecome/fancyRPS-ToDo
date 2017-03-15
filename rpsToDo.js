// This project introduces us to manipulating the HTML DOM with Javascript.
//
// Here are some resources you may find helpful throughout the course of this project:
//
// https://www.w3schools.com/js/js_intro.asp
//  https://www.w3schools.com/js/js_htmldom.asp
//  https://www.w3schools.com/js/js_htmldom_html.asp
//  https://www.w3schools.com/js/js_htmldom_methods.asp


// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.




//The HTML DOM allows JavaScript to change the content of HTML elements.


var losses = 0;
//TO DO: enter code to match 'losses' above for 'wins'
  
//YOUR CODE GOES HERE
//declare and set 'wins' variable to 0 below

			
var play = function(playerChoice) {

  //Start off by defining player, opponent, and results values as empty strings
  //None of these have a value yet, so they are defined as variables for the computer, but "points" are left blank until game play begins
  document.getElementById('player').innerHTML = '';
  //TO DO: enter code to match 'player' above for 'opponent' and 'results'
	
  //YOUR CODE GOES HERE 

	//The user makes their choice, which sets that value (rock, paper, or scissors) to 'player'  
	//This is our very first Javascript conditional statement!
	//A conditional statement is where a piece of code gets executed IF something is true. === means a value exactly matches the variable; || stands for "or"
	//The following conditional says:
	//"If the player chooses rock, OR chooses paper, OR chooses scissors, then show the player's choice on the page'
  if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    //When we get that element by the 'player' ID, the user's choice is then printed on the page. HTML + JS's 'document.getElementById' is how we get the value to display.
    document.getElementById('player').innerHTML = 'You chose' + ' ' + playerChoice + '.';

  } else {
    //If our page has a random option to choose, like "fire" we can throw an error
    document.getElementById('player').innerHTML = 'That is not a valid choice, try again.';
    return false;
  }
	
	//The computer's selection is set to a random number.  Math.random(); is calling a native Javascript function to provide the random number.  The rest of this function sets the value of the computer choice based on that number. They are broken up into "thirds" because we have three choices. We want to stop at 1/100th above the fraction, so that the computer includes .33 & .66 in the comparison
  var computerChoice = Math.random();
  //if .33 or less, choice will be rock
  if (computerChoice < 0.34) {
    computerChoice = 'rock';
  //
  //**HINT: the way to combined two conditional arguments in javascript is with &&:
  // if (peanutButter && jelly){
  //	 make sandwich;
  // } else if (peanutButter) {
  //	return 'No sandwich for you!';
  // }
  //
  //if less than or equal to .67 AND greater than .33, choice will be paper
  } else if (computerChoice <= 0.67 && computerChoice > 0.33) {
    //TO DO: set computer choice equal to paper here
    //YOUR CODE GOES HERE

    
  //otherwise, choice will be scissors
  } else {
    //TO DO: set computer choice equal to scissors here
    //YOUR CODE GOES HERE
  } 

  //when we get the element by the 'opponent' ID, the computer's choice is then printed on the page
  document.getElementById('opponent').innerHTML = '// Your opponent chose' + ' ' + computerChoice + '.';

  //here, we make the game logic to compare the rock, paper, & scissors
  var compare = function (choice1, choice2) {

    if (choice1 === choice2) {
      return 'The result is a tie!';

    } else if (choice1 === 'rock') {
		
      if (choice2 === 'scissors') {
        wins++;
        return 'rock wins!';
      } else {
        losses++;
        return 'sorry, paper wins.';
      }
    } else if (choice1 === 'paper') {
      if (choice2 === 'rock') {
        wins++;
        return 'paper wins!';
      } else {
        losses++;
        return 'sorry. scissors win.';
      }
    } else if (choice1 === 'scissors') {
      if (choice2 === 'rock') {
        losses++;
        return 'sorry. rock wins';
      } else {
        wins++;
        return 'scissors win!';
      }
    } else {
      return 'bummer dude. game over. no dice.';
    }
  };
  
  //Here, we pass in playerChoice and computerChoice as the choice1 & choice2 arguments to our "compare" function. The result value we get from running that function is set equal to our winner variable
  var winner = compare(playerChoice, computerChoice);
  

  document.getElementById('results').innerHTML = winner;
  //TO DO: enter code to match 'winner' above for 'wins' and 'losses'

  //YOUR CODE GOES HERE
					
  if (wins > 99 || losses > 99) {
    alert('You have played 99 rounds! <br />Take a break and go outside.');
  }
//TO DO: enter code for if wins are greater than 999, and if losses are greater than 999, with proper syntax. Don't forget closing brackets and semi-colons!

// You can use (copy & paste) these alerts:
// alert('You reached the max score of 999. <br />Congratulations, you have no life.')
// alert('Your opponent reached the max score of 999. <br />Sorry, you have no life.')

//YOUR CODE GOES HERE
    
};

//this function is fired when the reset button is pressed, which clears out the scores
var reset = function() {
  losses = 0;
  wins = 0;
  document.getElementById('wins').innerHTML = wins;
  //TO DO: enter code to match 'wins' above for 'losses'

  //YOUR CODE GOES HERE
};