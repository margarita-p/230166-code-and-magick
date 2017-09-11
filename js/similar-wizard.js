'use strict';

(function () {

  var coatColor;
  var eyesColor;
  var wizards = [];
  var lastTimeout;

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    window.render.appendWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = window.util.compareElements(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizard.onCoatChange = function (color) {
    coatColor = color;
    window.util.debounce(updateWizards);
  };

  window.wizard.onEyesChange = function (color) {
    eyesColor = color;
    window.util.debounce(updateWizards);
  };

  var onWizardsLoad = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load(onWizardsLoad, window.backend.isError);

})();
