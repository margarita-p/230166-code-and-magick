'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');

  var onEscPress = function (evt) {
    window.util.isEscEvent(evt, close);
  };

  var open = function () {
    window.util.showDOMElement(userDialog);
    document.addEventListener('keydown', onEscPress);
  };

  var close = function () {
    window.util.hideDOMElement(userDialog);
    document.removeEventListener('keydown', onEscPress);
  };

  userDialogOpen.addEventListener('click', function () {
    open();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, open);
  });

  userDialogClose.addEventListener('click', function () {
    close();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, close);
  });
})();
