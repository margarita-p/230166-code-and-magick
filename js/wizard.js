'use strict';

(function () {

  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var setupWizard = userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');

  var inputWizardCoat = userDialog.querySelector('input[name="coat-color"]');
  var inputWizardEyes = userDialog.querySelector('input[name="eyes-color"]');
  var inputWizardFireball = userDialog.querySelector('input[name="fireball-color"]');

  window.wizard = {
    onCoatChange: function () {
      var newColor = window.util.getRandomRepeatElement(WIZARD_COAT_COLORS);
      wizardCoat.style.fill = newColor;
      inputWizardCoat.value = newColor;
      window.wizard.onCoatChange(newColor);
    },

    onEyesChange: function () {
      var newColor = window.util.getRandomRepeatElement(WIZARD_EYES_COLORS);
      wizardEyes.style.fill = newColor;
      inputWizardEyes.value = newColor;
      window.wizard.onEyesChange(newColor);
    }
  };

  wizardCoat.addEventListener('click', window.wizard.onCoatChange);

  wizardEyes.addEventListener('click', window.wizard.onEyesChange);

  // __________

  var onWizardFireballColorChange = function () {
    window.colorizeElement.paintElement(wizardFireball, WIZARD_FIREBALL_COLORS, inputWizardFireball, window.colorizeElement.changeElementBackground);
  };

  wizardFireball.addEventListener('click', onWizardFireballColorChange);
  wizardFireball.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, onWizardFireballColorChange);
  });

})();
