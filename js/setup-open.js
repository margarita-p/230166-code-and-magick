'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');

  var escPressHandler = function (evt) {
    window.global.isEscEvent(evt, close);
  };

  var open = function () {
    window.global.showDOMElement(userDialog);
    document.addEventListener('keydown', escPressHandler);
  };

  var close = function () {
    window.global.hideDOMElement(userDialog);
    document.removeEventListener('keydown', escPressHandler);
  };

  userDialogOpen.addEventListener('click', function () {
    open();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    window.global.isEnterEvent(evt, open);
  });

  userDialogClose.addEventListener('click', function () {
    close();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    window.global.isEnterEvent(evt, close);
  });
})();
