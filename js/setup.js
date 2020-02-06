'use strict';
var WIZARDS_COUNTER = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var clothesСolor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardName = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');
var fireballInput = document.getElementsByName('coat-color');
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

for (var index = 0; index < WIZARDS_COUNTER; index++) {
  makingWizard();
}

document.querySelector('.setup').classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var similarListElement = document.querySelector('.setup-similar-list');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS_COUNTER; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

// хэндлеры
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (wizardName !== document.activeElement && evt.key === ESC_KEY) {
    closePopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = clothesСolor[getRandomIntInclusive(0, clothesСolor.length)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = colors[getRandomIntInclusive(0, colors.length)];
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = fireballColors[getRandomIntInclusive(0, fireballColors.length)];
  fireballInput.value = fireballColors[getRandomIntInclusive(0, fireballColors.length)];
});
