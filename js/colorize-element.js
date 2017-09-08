'use strict';

(function () {

  // var userDialog = document.querySelector('.setup');
  // userDialog.style.backgroundColor = 'red';

  window.colorizeElement = {

    paintElement: function (element, arr, input, action) {
      var color = window.global.getRandomRepeatElement(arr);
      input.value = color;
      action(element, color);
    },

    fillElement: function (element, color) {
      element.style.fill = color;
    },

    changeElementBackground: function (element, color) {
      element.style.backgroundColor = color;
    }

  };

})();
