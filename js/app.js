"use strict";


var answerOne = prompt("have i ever lived in the state of Iowa?").toLowerCase();
var answerTwo = prompt("have i ever lived in the state of Iowa?").toLowerCase();
var answerThree = prompt("have i ever lived in the state of Iowa?").toLowerCase();
var answerFour = prompt("have i ever lived in the state of Iowa?").toLowerCase();
var answerFive = prompt("have i ever lived in the state of Iowa?").toLowerCase();

if(answerOne === 'no' || answerOne === 'n') {
    alert('you are correct ' + userName + ' I have never lived in Iowa');
    console.log('The user got the correct answer for #1')
} else {
    alert('you are wrong I have never lived in Iowa');
    console.log('The user got the wrong answer for #1')
}

