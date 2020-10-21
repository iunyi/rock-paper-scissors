'use strict'

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const userName = document.querySelector('.user_name');
const pcName = document.querySelector('.pc_name');
const userBubble = document.querySelector('.user_bubble-image');
const pcBubble = document.querySelector('.pc_bubble-image');
let userMessage = document.querySelector('.user_bubble-message')
let pcMessage = document.querySelector('.pc_bubble-message')
const userScoreBoard = document.querySelector('.user_score');
const pcScoreBoard = document.querySelector('.pc_score');
let userScore = 0;
let pcScore = 0;

// 1.1. PC makes a choice randomly
function getPcChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber, choices[randomNumber])
    return choices[randomNumber];
}

function removeIntroduction() {
    userName.classList.add('hidden');
    pcName.classList.add('hidden');
    userBubble.classList.remove('hidden');
    pcBubble.classList.remove('hidden');
}

function playersSays(userChoice, pcChoice) {
    if (userBubble.classList.contains('hidden')) {
        removeIntroduction();
    }
    userMessage.innerHTML = userChoice + '!'
    pcMessage.innerHTML = pcChoice + '!'
}

function updateScoreBoard() {
    userScoreBoard.innerHTML = userScore;
    pcScoreBoard.innerHTML = pcScore;
}

// 1.2. - Scenario A: User wins
function win(userChoice, pcChoice) {
    let userChoiceDiv = document.getElementById(userChoice);
    playersSays(userChoice, pcChoice);
    userScore++;
    updateScoreBoard();
    userChoiceDiv.classList.add('win');
    setTimeout(() => userChoiceDiv.classList.remove('win'), 300);
}

// 1.2. - Scenario B: User loses
function lose(userChoice, pcChoice) {
    let userChoiceDiv = document.getElementById(userChoice);
    playersSays(userChoice, pcChoice);
    pcScore++;
    updateScoreBoard();
    userChoiceDiv.classList.add('lose');
    setTimeout(() => userChoiceDiv.classList.remove('lose'), 300);
}

// 1.2. - Scenario C: Draw
function draw(userChoice, pcChoice) {
    let userChoiceDiv = document.getElementById(userChoice);
    playersSays(userChoice, pcChoice);
    userChoiceDiv.classList.add('draw');
    setTimeout(() => userChoiceDiv.classList.remove('draw'), 300);
}

// 1. Comparison (1.1. + 1.2.)
function playGame(userChoice) {

    let pcChoice = getPcChoice();

    switch (`${userChoice}-${pcChoice}`) {
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            win(userChoice, pcChoice);
            break;
        case "rocks-paper":
        case "paper-scissors":
        case "scissors-rock":
            lose(userChoice, pcChoice);
            break;
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            draw(userChoice, pcChoice);
            break;
    }
}

// 0. Start game. User makes a choice
rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissors.addEventListener('click', () => playGame('scissors'));
