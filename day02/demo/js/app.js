'use strict';


function getUserName() {
  var userName = prompt('Hi, What is your name?');
  console.log('the user\'s name is' + userName);
  alert('Hi ' + userName + '!' + ' Welcome to my site!');
  alert('Please read my bio below and take a short quiz');
  document.write('<h2>' + 'Hi ' + userName + '</h2>');
  document.write('Here are some fun facts about me!');
}
getUserName();

function whereFrom() {
  var questionOne = prompt('Where am I originally from?');
  // console.log(questionOne, 'test');
  if (questionOne.toLowerCase() === 'salt lake city') {
    alert('CORRECT!');
    document.write('<li>For question one you answered ' + questionOne + '. CORRECT!</li>');
  } else {
    alert('Nope, that is incorrect');
    document.write('<li>For question one you answered ' + questionOne + '. that was incorrect</li>');
  }
}
whereFrom();

function degree() {
  var questionTwo = prompt('What is my degree in?');
  // console.log(questionOne, 'test');
  if (questionTwo.toLowerCase() === 'illustration') {
    alert('CORRECT!');
    document.write('<li>For question one you answered ' + questionTwo + '. CORRECT!</li>');
  } else {
    alert('Nope, that is incorrect');
    document.write('<li>For question one you answered ' + questionTwo + '. that was incorrect</li>');
  }
}
degree();

function studyGuitar() {
  var questionThree = prompt('Who did I study guitar with?');
  // console.log(questionOne, 'test');
  if (questionThree.toLowerCase() === 'robert fripp') {
    alert('CORRECT!');
    document.write('<li>For question one you answered ' + questionThree + '. CORRECT!</li>');
  } else {
    alert('Nope, that is incorrect');
    document.write('<li>For question one you answered ' + questionThree + '. that was incorrect</li>');
  }
}
studyGuitar();

function kindMusic() {
  var questionFour = prompt('What kind of music do I play?');
  // console.log(questionOne, 'test');
  if (questionFour.toLowerCase() === 'jazz') {
    alert('CORRECT!');
    document.write('<li>For question one you answered ' + questionFour + '. CORRECT!</li>');
  } else {
    alert('Nope, that is incorrect');
    document.write('<li>For question one you answered ' + questionFour + '. that was incorrect</li>');
  }
}
kindMusic();

function cityJazz() {
  var questionFive = prompt('What city do I play jazz?');
  // console.log(questionOne, 'test');
  if (questionFive.toLowerCase() === 'tacoma') {
    alert('CORRECT!');
    document.write('<li>For question one you answered ' + questionFive + '. CORRECT!</li>');
  } else {
    alert('Nope, that is incorrect');
    document.write('<li>For question one you answered ' + questionFive + '. that was incorrect</li>');
  }
}
cityJazz();

function guessNum() {
  for (var i = 0; i < 4; i++) {
    var questionSix = prompt('Can you guess my favorite number between 1-10?');
    questionSix = parseInt(questionSix);
    console.log(questionSix);
    if (questionSix === 8) {
      console.log('correct');
      alert('You are Correct!');
      break;

    } else if (questionSix > 8) {
      console.log(questionSix);
      alert('You are too high');

    } else if (questionSix < 8) {
      console.log(questionSix);
      alert('You are too low');
    }
    if (i === 3) {
      alert('You are out of guesses, the answer is 8!');
    }
  }
}
guessNum();



var favMovies = ['waiting for guffman', 'pale rider', 'death proof', 'the jerk', 'swingers', 'zelig', 'superbad', 'sean of the dead', 'rubin and ed', 'napoleon dynamite'];
// console.log ('line 78',favMovies[4])
var attempts = 6;
function final() {
  for (var i = 0; i < attempts; i++) {
    var userResponse = prompt('Can you guess my favorite movie?').toLowerCase();
    if (userResponse === favMovies[0] || userResponse === favMovies[1] || userResponse === favMovies[2] || userResponse === favMovies[3] || userResponse === favMovies[4] || userResponse === favMovies[5] || userResponse === favMovies[6] || userResponse === favMovies[7] || userResponse === favMovies[8] || userResponse === favMovies[9] || userResponse === favMovies[10]) {
      alert('You are correct!');
      break;
    }
    else if (userResponse !== favMovies) {
      alert('You are incorrect')
    }
  }
}
final();

document.write('Thanks ' + userName + '!' + ' for visiting and taking the quiz!');
