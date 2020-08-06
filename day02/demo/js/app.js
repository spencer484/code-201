'use strict';

var userName = prompt('Hi, What is your name?');
// console.log('the user\'s name is' + userName);
alert('Hi ' + userName + '!' + ' Welcome to my site!');
alert('Please read my bio below and take a short quiz');
document.write('<h2>' + 'Hi ' + userName + '</h2>');
document.write('Here are some fun facts about me!');
var questionOne = prompt('Where am I originally from?');
// console.log(questionOne, 'test');
if (questionOne.toLowerCase() === 'Salt Lake City'){
  alert('CORRECT!');
  document.write('<li>For question one you answered ' + questionOne + '. CORRECT!</li>');
} else {
  alert('Nope, that is incorrect');
  document.write('<li>For question one you answered ' + questionOne + '. that was incorrect</li>');
}
var questionTwo = prompt('What is my degree in?');
// console.log(questionOne, 'test');
if (questionTwo.toLowerCase() === 'illustration'){
  alert('CORRECT!');
  document.write('<li>For question one you answered ' + questionTwo + '. CORRECT!</li>');
} else {
  alert('Nope, that is incorrect');
  document.write('<li>For question one you answered ' + questionTwo + '. that was incorrect</li>');
}
var questionThree = prompt('Who did I study guitar with?');
// console.log(questionOne, 'test');
if (questionThree.toLowerCase() === 'robert fripp'){
  alert('CORRECT!');
  document.write('<li>For question one you answered ' + questionThree + '. CORRECT!</li>');
} else {
  alert('Nope, that is incorrect');
  document.write('<li>For question one you answered ' + questionThree + '. that was incorrect</li>');
}
var questionFour = prompt('What kind of music do I play?');
// console.log(questionOne, 'test');
if (questionFour.toLowerCase() === 'jazz'){
  alert('CORRECT!');
  document.write('<li>For question one you answered ' + questionFour + '. CORRECT!</li>');
} else {
  alert('Nope, that is incorrect');
  document.write('<li>For question one you answered ' + questionFour + '. that was incorrect</li>');
}
var questionFive = prompt('What city do I play jazz?');
// console.log(questionOne, 'test');
if (questionFive.toLowerCase() === 'tacoma'){
  alert('CORRECT!');
  document.write('<li>For question one you answered ' + questionFive + '. CORRECT!</li>');
} else {
  alert('Nope, that is incorrect');
  document.write('<li>For question one you answered ' + questionFive + '. that was incorrect</li>');
}

for (var i=0; i<4; i++){
  var questionSix = prompt('Can you guess my favorite number between 1-10?');
  questionSix = parseInt(questionSix);
  console.log (questionSix);
  if (questionSix === 8){
    console.log ('correct');
    alert ('You are Correct!');
    break;

  }else if (questionSix > 8){
    console.log (questionSix);
    alert ('You are too high');

  }else if (questionSix < 8){
    console.log (questionSix);
    alert ('You are too low');
  }
  if (i===3){
    alert ('You are out of guesses, the answer is 8!');
  }

}
var favMovies = ['waiting for guffman', 'pale rider', 'death proof','the jerk','swingers','zelig','superbad','sean of the dead','rubin and ed','napoleon dynamite'];
// console.log ('line 78',favMovies[4])
var favorite = 'the jerk';
console.log ('question seven', userResponse)
for (var i=0; i<6; i++){
  console.log ('i-', i)
  console.log ('favMovies at i-', favMovies[i])
  var userResponse = prompt('Can you guess my favorite movie?');
  if (userResponse.toLowerCase() === favorite){
    alert ('You are correct!');
    break;    
  }
}
    alert ('Sorry, You ran out of guesses.');

document.write('Thanks ' + userName + '!' + ' for visiting and taking the quiz!');
