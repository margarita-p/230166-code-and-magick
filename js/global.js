'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.global = {
    RED_COLOR: 'rgb(255, 0, 0)',
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    showDOMElement: function (elem) {
      elem.classList.remove('hidden');
    },

    hideDOMElement: function (elem) {
      elem.classList.add('hidden');
    },

    getRandomNoRepeatElement: function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      var removed = arr.splice(rand, 1);
      return removed;
    },

    getRandomRepeatElement: function (arr) {
      var rand = arr[Math.floor(Math.random() * arr.length)];
      return rand;
    },

    findMaxHeight: function (arr) {
      var max = -1;
      for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(arr[i]);
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      return max;
    },

    getRandomBlueColor: function () {
      return 'rgb(0, 0, ' + Math.floor(Math.random() * 255) + ')';
    },

  };
})();
