'use strict';

(function () {

  var getColor = function (arr) {
    var color = window.global.getRandomRepeatElement(arr);
    return color;
  };

  window.colorizeElement = function (element, arr, changeColor) {
      element.addEventListener('click', function () {
        getColor(arr);
        changeColor(element, color);
      });
    }
})();
