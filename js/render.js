'use strict';

(function () {

  var WIZARDS_AMOUNT = 4;

  var friendsBlock = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizardArtifacts = function (wizard) {
    return wizard.artifacts.map(function (it) {
      return it.name;
    }).join('<br>');
  };

  var renderWizard = function (wizard) {
    var element = similarWizardTemplate.cloneNode(true);
    var wizardElement = element.querySelector('.wizard');

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    window.popup.handleShowHideWizardBag(wizardElement, function () {
      return renderWizardArtifacts(wizard);
    });

    return element;
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
