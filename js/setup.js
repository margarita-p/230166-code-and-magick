'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARDS_LENGTH = 4;
var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Открываем, закрываем
var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');

var escPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    close();
  }
};

var open = function(modal) {
  modal.classList.remove('hidden');
  document.addEventListener('keydown', EscPressHandler);
};

var close = function(modal) {
  modal.classList.add('hidden');
  document.removeEventListener('keydown', EscPressHandler);
};

userDialogOpen.addEventListener('click', function () {
  open(userDialog);
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    open(userDialog);
  }
});

userDialogClose.addEventListener('click', function () {
  close(userDialog);
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    close(userDialog);
  }
});

// ________________________________________________________

var userNameInput = userDialog.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
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

// минимальная длина для Edge
userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('От 2-х букв');
  } else {
    target.setCustomValidity('');
  }
});

// открываем список похожих персонажей
var friendsBlock = userDialog.querySelector('.setup-similar');

var showDOMElement = function (elem) {
  elem.classList.remove('hidden');
}

showDOMElement(friendsBlock);


// Получение неповторяющегося случайного элемента массива
var getRandomNoRepeat = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  var removed = arr.splice(rand, 1);
  return removed;
};


// Создание массива
var getWizards = function () {
  wizards = [];
  for (var i = 0; i < WIZARDS_LENGTH; i++) {
    wizards[i] = {
      name: getRandomNoRepeat(WIZARD_FIRST_NAMES) + ' ' + getRandomNoRepeat(WIZARD_SECOND_NAMES),
      coatColor: getRandomNoRepeat(WIZARD_COAT_COLORS),
      eyesColor: getRandomNoRepeat(WIZARD_EYES_COLORS),
    }
  }
  return wizards;
};

var wizards = getWizards();


// Клонирование
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (arr) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = arr.name;
  wizardElement.querySelector('.wizard-coat').style.fill = arr.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
  return wizardElement;
};

var appendWizards = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }
  similarListElement.appendChild(fragment);
};

appendWizards(wizards);


//меняем цвет при клике
var setupWizard = userDialog.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireballWrap = userDialog.querySelector('.setup-fireball-wrap');

var inputWizardCoat = setupWizard.querySelector('input[name="coat-color"]');
var inputWizardEyes = setupWizard.querySelector('input[name="eyes-color"]');
var inputWizardFireball = setupWizard.querySelector('input[name="eyes-color"]');

var getRandomRepeat = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

wizardCoat.addEventListener('click', function () {
  var color = getRandomRepeat(wizards).coatColor;
  wizardCoat.style.fill = color;
  inputWizardCoat.value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = getRandomRepeat(wizards).eyesColor;
  wizardEyes.style.fill = color;
  inputWizardEyes.value = color;
});

fireballWrap.addEventListener('click', function () {
  var color = getRandomRepeat(WIZARD_FIREBALL_COLORS);
  fireballWrap.style.backgroundColor = color;
  inputWizardFireball.value = color;
});


// меняем цвета при нажатиии enter
wizardCoat.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    var color = getRandomRepeat(wizards).coatColor;
    wizardCoat.style.fill = color;
    inputWizardCoat.value = color;
  }
});

wizardEyes.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    var color = getRandomRepeat(wizards).eyesColor;
    wizardEyes.style.fill = color;
    inputWizardEyes.value = color;
  }
});

fireballWrap.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    var color = getRandomRepeat(WIZARD_FIREBALL_COLORS);
    fireballWrap.style.backgroundColor = color;
    inputWizardFireball.value = color;
  }
});
