'use strict';

(function () {

  var WIZARDS_AMOUNT = 4;

  var friendsBlock = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (element) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = element.name;
    wizardElement.querySelector('.wizard-coat').style.fill = element.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = element.colorEyes;
    return wizardElement;
  };

  window.render = {

    appendWizards: function (data) {
      var takeNumber = data.length > WIZARDS_AMOUNT ? WIZARDS_AMOUNT : data.length;
      similarListElement.innerHTML = '';
      for (var i = 0; i < takeNumber; i++) {
        similarListElement.appendChild(renderWizard(data[i]));
      }
      window.util.showDOMElement(friendsBlock);
    }

  };

})();
