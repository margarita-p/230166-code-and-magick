'use strict';

(function () {

  window.colorizeElement = function (element, arr, changeColor) {
    element.addEventListener('click', function () {
      var color = window.global.getRandomRepeatElement(arr);
      changeColor(element, color);
    });
  }
})();
