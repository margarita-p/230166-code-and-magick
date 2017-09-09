'use strict';

(function () {
  var WIZARDS_LENGTH = 4;

  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var friendsBlock = userDialog.querySelector('.setup-similar');

  // Клонирование
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // ______

  var onWizardsLoad = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_LENGTH; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }
    similarListElement.appendChild(fragment);
    window.global.showDOMElement(friendsBlock);
  };

  window.backend.load(onWizardsLoad, window.backend.isError);

  // Отправка формы
  var form = userDialog.querySelector('.setup-wizard-form');

  var uploadForm = function () {
    userDialog.classList.add('hidden');
  };

  var onWizardsSave = function (evt) {
    window.backend.save(new FormData(form), uploadForm, window.backend.isError);
    evt.preventDefault();
  };

  form.addEventListener('submit', onWizardsSave);


  // меняем цвет при клике
  var setupWizard = userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');

  var inputWizardCoat = userDialog.querySelector('input[name="coat-color"]');
  var inputWizardEyes = userDialog.querySelector('input[name="eyes-color"]');
  var inputWizardFireball = userDialog.querySelector('input[name="fireball-color"]');

  var onWizardCoatColorChange = function () {
    window.colorizeElement.paintElement(wizardCoat, WIZARD_COAT_COLORS, inputWizardCoat, window.colorizeElement.fillElement);
  };

  var onWizardEyesColorChange = function () {
    window.colorizeElement.paintElement(wizardEyes, WIZARD_EYES_COLORS, inputWizardEyes, window.colorizeElement.fillElement);
  };

  var onWizardFireballColorChange = function () {
    window.colorizeElement.paintElement(wizardFireball, WIZARD_FIREBALL_COLORS, inputWizardFireball, window.colorizeElement.changeElementBackground);
  };

  wizardCoat.addEventListener('click', onWizardCoatColorChange);
  wizardEyes.addEventListener('click', onWizardEyesColorChange);
  wizardFireball.addEventListener('click', onWizardFireballColorChange);

  wizardCoat.addEventListener('keydown', function (evt) {
    window.global.isEnterEvent(evt, onWizardCoatColorChange);
  });
  wizardEyes.addEventListener('keydown', function (evt) {
    window.global.isEnterEvent(evt, onWizardEyesColorChange);
  });
  wizardFireball.addEventListener('keydown', function (evt) {
    window.global.isEnterEvent(evt, onWizardFireballColorChange);
  });

})();
