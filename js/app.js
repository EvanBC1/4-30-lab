"use strict";

var userName = prompt("What is your name?")
var score = 0;

var answerOne = prompt("Is Africa the second largest continent?").toLowerCase();
if(answerOne === 'yes' || answerOne === 'y') {
    alert('you are correct '+ userName +', Africa is the second largest continent');
    console.log('The user got the correct answer for #1');
    score++; 
} else {
    alert('you are incorrect '+ userName +', Africa is the second largest continent');
    console.log('The user got the wrong answer for #1');
}

var answerTwo = prompt("Is the Amazon the longest river").toLowerCase();
if(answerTwo === 'no' || answerTwo === 'n') {
    alert('you are correct '+ userName +', the Nile is the longest river');
    console.log('The user got the correct answer for #2');
    score++; 
} else {
    alert('you are incorrect '+ userName +', the Nile is the longest river');
    console.log('The user got the wrong answer for #2');
}

var answerThree = prompt("Is Mt Everest the tallest mountain?").toLowerCase();
if(answerThree === 'yes' || answerThree === 'y') {
    alert('you are correct '+ userName +', Mt Everest the tallest mountain');
    console.log('The user got the correct answer for #3');
    score++; 
} else {
    alert('you are incorrect '+ userName +', Mt Everest the tallest mountain');
    console.log('The user got the wrong answer for #3');
}    

var answerFour = prompt("Is the US the 3rd largest Country").toLowerCase();
if(answerFour === 'no' || answerFour === 'n') {
    alert('you are correct '+ userName +', the US is the 4th largest country');
    console.log('The user got the correct answer for #4');
    score++; 
} else {
    alert('you are incorrect '+ userName +', the Us is the 4th largest country');
    console.log('The user got the wrong answer for #4');
}

var answerFive = prompt("Is the Atlantic the biggest ocean?").toLowerCase();
if(answerFive === 'no' || answerFive === 'n') {
    alert('you are correct '+ userName +', the Atlantic is the second largest Ocean');
    console.log('The user got the correct answer for #5');
    score++; 
} else {
    alert('you are incorrect '+ userName +', the Atlantic is the second largest Ocean');
    console.log('The user got the wrong answer for #5');
}
document.getElementById("score").innerHTML = score;
