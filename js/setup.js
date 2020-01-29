'use strict';
var WIZARDS_COUNTER = 4;

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var clothesСolor = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var colors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var makingWizard = function () {
  wizards.push({
    name: firstNames[getRandomIntInclusive(0, firstNames.length)] + lastNames[getRandomIntInclusive(0, lastNames.length)],
    coatColor: clothesСolor[getRandomIntInclusive(0, clothesСolor.length)],
    eyesColor: colors[getRandomIntInclusive(0, colors.length)]
  });
};

document.querySelector('.setup').classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var similarListElement = document.querySelector('.setup-similar-list');

for (var i = 0; i < WIZARDS_COUNTER; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  makingWizard();

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');
