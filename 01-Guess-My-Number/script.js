"use strict";

let sceretNumber= Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector(".score").textContent=score;
let highScore=0;
const displayMessage= function(message){
    document.querySelector(".message").textContent=message;
}

document.querySelector(".check").addEventListener('click',function(){
    const guess=Number(document.querySelector(".guess").value);
    if(guess === sceretNumber){
        displayMessage("Correct Number");
        document.querySelector(".number").textContent=sceretNumber;
        document.querySelector(".score").textContent=score;
        document.querySelector("body").style.background="#60b347";
        if(score>highScore){
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }else{
            document.querySelector(".highscore").textContent=highScore;
        }
    }else if(!guess){
        if(score>1){
        displayMessage('Enter the Number');
        score--;
        document.querySelector(".score").textContent=score;
        }else{
            displayMessage('You Loose');
            document.querySelector(".score").textContent=0;
        }
    }else if(guess !== sceretNumber){
        if(score>1){
            displayMessage(guess > sceretNumber?'Too high':'Too Low');
            score--;
            document.querySelector(".score").textContent=score;
        }else{
            displayMessage('You Loose');
            document.querySelector(".score").textContent=0;
        }
    }
});
document.querySelector(".again").addEventListener('click',function(){
    score = 20;
    sceretNumber= Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").textContent='';
    document.querySelector("body").style.background="#222";
});