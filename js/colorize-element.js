'use strict';

(function () {

  window.colorizeElement = {

    clickElement: function (element, arr, input, action) {
      var color = window.global.getRandomRepeatElement(arr);
      input.value = color;
      action(element, color);
    },

    pressElement: function (element, arr, input, action) {
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
