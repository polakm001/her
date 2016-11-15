var fieldsets = document.querySelectorAll("fieldset");

var project = fieldsets[2];
var stage = fieldsets[4];

var projectButton = document.querySelector("input[value=project]");  // hiermee selecteer ik de button op basis van een query selector die kijkt naar de input[value=project]
var stageButton = document.querySelector("input[value=stage]");     // hiermee selecteer ik de button op basis van een query selector die kijkt naar de input[value=stage]

project.classList.add('invisible');  // hier zet ik het project op onzichtbaar
stage.classList.add('invisible');   // hier zet ik de stage op onzichtbaar

// nu schrijf ik een functie, zodra er geklikt wordt, verwijder ik die class van invisible, die ik hierboven heb gedeclareerd.
// dat doe ik voor beide buttons..

projectButton.addEventListener("click", function () {
project.classList.remove('invisible');
stage.classList.add('invisible');
}, false);

stageButton.addEventListener("click", function () {
stage.classList.remove('invisible');
project.classList.add('invisible');
}, false);
