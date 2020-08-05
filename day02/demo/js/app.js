'use strict';

var userName = prompt('Hi, What is your name?');
// console.log('the user\'s name is' + userName);
alert('Hi ' + userName + '!' + ' Welcome to my site!');
alert('Please read my bio below and take a short quiz');
document.write('<h2>' + 'Hi ' + userName + '</h2>');
document.write('Here are some fun facts about me!');
var questionOne = prompt('Where am I originally from?');
// console.log(questionOne, 'test');
if (questionOne === 'Salt Lake City'){
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
document.write('Thanks ' + userName + '!' + ' for visiting and taking the quiz!');
