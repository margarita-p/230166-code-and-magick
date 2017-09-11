'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  var userNameInput = userDialog.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (!userNameInput.validity.valid) {
      if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('От 2-х букв');
      } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Должно быть меньше 25 букв');
      } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Надо заполнить');
      }
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  // для Edge
  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('От 2-х букв');
    } else {
      target.setCustomValidity('');
    }
  });

  // Отправка формы
  var form = document.querySelector('.setup-wizard-form');

  var uploadForm = function () {
    userDialog.classList.add('hidden');
  };

  var onWizardsSave = function (evt) {
    window.backend.save(new FormData(form), uploadForm, window.backend.isError);
    evt.preventDefault();
  };

  form.addEventListener('submit', onWizardsSave);

})();
