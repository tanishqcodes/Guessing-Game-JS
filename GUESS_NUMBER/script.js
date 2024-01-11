'use strict';
let computerguess = Math.floor(Math.random() * 20);
console.log(computerguess);
let userguess;
let score = 20;
let highscore = -1;
document.getElementsByClassName('highscore')[0].innerHTML = 'none';

document.getElementsByClassName('score')[0].innerHTML = 20;
function handleClick() {
    computerguess = Math.floor(Math.random() * 20);
    console.log(computerguess);
    document.getElementsByClassName('score')[0].innerHTML = 20;   
    document.body.style.backgroundColor = '#222' ;
}
 

function handleCheck() {
    userguess = document.querySelector('.guess').value;
    // console.log(userguess);

    if(userguess == computerguess){
        document.getElementsByClassName('heading')[0].innerHTML = 'Congratulations!!! YOU FOUND THE NUMBER';   
        highscore = Math.max(highscore, score - 1);
        document.getElementsByClassName('highscore')[0].innerHTML = highscore;
        document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
    }
    else if(Math.abs(userguess - computerguess) <= 5 && userguess > computerguess){
        document.getElementsByClassName('heading')[0].innerHTML = 'Closer but Higher, Try a smaller number';
        
    }
    else if(Math.abs(userguess - computerguess) <= 5 && userguess < computerguess){
        document.getElementsByClassName('heading')[0].innerHTML = 'Closer but lower, Try a higher number';
    }
    else if(computerguess > userguess) {
        document.getElementsByClassName('heading')[0].innerHTML = 'Your guess is too small';
    }
    else {
        document.getElementsByClassName('heading')[0].innerHTML = 'Your guess is too large';
    }
    score = score - 1;
    document.getElementsByClassName('score')[0].innerHTML = score;

}


document.getElementsByClassName('btn again')[0].addEventListener('click', handleClick);
document.getElementsByClassName('btn check')[0].addEventListener('click', handleCheck);


