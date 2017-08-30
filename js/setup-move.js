'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var dialogHandle = userDialog.querySelector('.upload');

  var isDialogHandleEvent = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  // +++Вешаем событие на открытие окна+++
  var userDialogOpen = document.querySelector('.setup-open');

  var isUserDialogOpenEvent = function () {
    dialogHandle.addEventListener('mousedown', isDialogHandleEvent);
  };

  // при клике
  var onUserDialogOpenclick = function () {
    isUserDialogOpenEvent();
  };

  userDialogOpen.addEventListener('click', onUserDialogOpenclick);

  // при нажатии на ентер
  var onUserDialogOpenPress = function (evt) {
    window.global.isEnterEvent(evt, isUserDialogOpenEvent);
  };

  userDialogOpen.addEventListener('keydown', onUserDialogOpenPress);


  // ++++Возвращаем начальные координаты окну после закрытия+++
  var userDialogClose = userDialog.querySelector('.setup-close');

  var isUserDialogCloseEvent = function () {
    userDialog.style.top = '100px';
    userDialog.style.left = '50%';
    userDialogOpen.removeEventListener('click', onUserDialogOpenclick);
    userDialogOpen.removeEventListener('keydown', onUserDialogOpenPress);
  };

  // при клике
  var onUserDialogCloseClick = function () {
    isUserDialogCloseEvent();
  };

  userDialogClose.addEventListener('click', onUserDialogCloseClick);

  // при нажатии на клавишу ентер
  var onUserDialogCloseEnterPress = function (evt) {
    window.global.isEnterEvent(evt, isUserDialogCloseEvent);
  };

  userDialogClose.addEventListener('keydown', onUserDialogCloseEnterPress);

  // при нажатии на ескейп
  var onUserDialogCloseEscPress = function (evt) {
    window.global.isEscEvent(evt, isUserDialogCloseEvent);
  };

  document.addEventListener('keydown', onUserDialogCloseEscPress);


  // +++перемещаем звездочку в рюкзак+++
  var shopElement = userDialog.querySelector('.setup-artifacts-shop');
  var artifactsElement = userDialog.querySelector('.setup-artifacts');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      evt.dataTransfer.effectAllowed = 'copy';
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = '';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.dataTransfer.dropEffect = 'copy';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

})();
