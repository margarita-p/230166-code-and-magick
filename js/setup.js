'use strict';

(function () {
  var WIZARDS_LENGTH = 4;
  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var friendsBlock = userDialog.querySelector('.setup-similar');
  window.global.showDOMElement(friendsBlock);

  // Создание массива
  var getWizards = function () {
    wizards = [];
    for (var i = 0; i < WIZARDS_LENGTH; i++) {
      wizards[i] = {
        name: window.global.getRandomNoRepeatElement(WIZARD_FIRST_NAMES) + ' ' + window.global.getRandomNoRepeatElement(WIZARD_SECOND_NAMES),
        coatColor: window.global.getRandomNoRepeatElement(WIZARD_COAT_COLORS),
        eyesColor: window.global.getRandomNoRepeatElement(WIZARD_EYES_COLORS),
      };
    }
    return wizards;
  };

  var wizards = getWizards();

  // Клонирование
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (arr) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = arr.name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
    return wizardElement;
  };

  var appendWizards = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }
    similarListElement.appendChild(fragment);
  };

  appendWizards(wizards);

  // меняем цвет при клике
  var setupWizard = userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireballWrap = userDialog.querySelector('.setup-fireball-wrap');

  var inputWizardCoat = userDialog.querySelector('input[name="coat-color"]');
  var inputWizardEyes = userDialog.querySelector('input[name="eyes-color"]');
  var inputWizardFireball = userDialog.querySelector('input[name="eyes-color"]');

  wizardCoat.addEventListener('click', function () {
    var color = window.global.getRandomRepeatElement(WIZARD_COAT_COLORS);
    wizardCoat.style.fill = color;
    inputWizardCoat.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.global.getRandomRepeatElement(WIZARD_EYES_COLORS);
    wizardEyes.style.fill = color;
    inputWizardEyes.value = color;
  });

  fireballWrap.addEventListener('click', function () {
    var color = window.global.getRandomRepeatElement(WIZARD_FIREBALL_COLORS);
    fireballWrap.style.backgroundColor = color;
    inputWizardFireball.value = color;
  });
})();
