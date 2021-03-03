'use strict';
let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    let guess =Number( document.querySelector('.guess').value); //Normally the value in an input field comes as a string. So we have to change it to a Number
    console.log(guess, typeof guess);

    // When no number is inputted
    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No Number!!!"
    
        // When the Player Wins
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!!';
        document.querySelector('.number').textContent = secretNumber; //Displays the SecretNumber when one wins
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score>highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When the guess is wrong
    }else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!!' : '📉 Too Low!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent ='💥You have lost the game😞!!';
            document.querySelector('.score').textContent = 0;
        }
    }   
})

document.querySelector('.again').addEventListener('click',function(){
    score = 20; // This resets the value of score to 20
    secretNumber = Math.trunc(Math.random()*20+1); // Creates a new secret Number
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem'
})