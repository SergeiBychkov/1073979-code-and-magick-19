'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

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
  for (var i = 0; i < window.data.WIZARDS_COUNTER; i++) {
    fragment.appendChild(renderWizard(window.data.wizards[i]));
  }

  similarListElement.appendChild(fragment);

  wizardCoat.addEventListener('click', function () {
    var currentColor = getRandomIntInclusive(0, window.data.clothesСolor.length);
    wizardCoat.style.fill = window.data.clothesСolor[currentColor];
    setup.querySelector('[name=coat-color]').value = window.data.clothesСolor[currentColor];
  });

  wizardEyes.addEventListener('click', function () {
    var currentColor = getRandomIntInclusive(0, window.data.colors.length);
    wizardEyes.style.fill = window.data.colors[currentColor];
    setup.querySelector('[name=eyes-color]').value = window.data.colors[currentColor];
  });

  fireball.addEventListener('click', function () {
    var currentColor = getRandomIntInclusive(0, window.data.fireballColors.length);
    fireball.style.backgroundColor = window.data.fireballColors[currentColor];
    fireball.querySelector('[name=fireball-color]').value = window.data.fireballColors[currentColor];
  });
})();
