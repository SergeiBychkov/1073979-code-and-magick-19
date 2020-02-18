'use strict';

(function () {
  var WIZARDS_COUNTER = 4;

  var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastNames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
  var clothesСolor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var colors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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

  for (var index = 0; index < WIZARDS_COUNTER; index++) {
    makingWizard();
  }

  window.data = {
    WIZARDS_COUNTER: WIZARDS_COUNTER,
    wizards: wizards,
    firstNames: firstNames,
    lastNames: lastNames,
    clothesСolor: clothesСolor,
    colors: colors,
    fireballColors: fireballColors
  };
})();
