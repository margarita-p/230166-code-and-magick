'use strict';

window.renderStatistics = function (ctx, names, times) {
  var HISTOGRAM_HEIGHT = 150;
  // Переменные для колонок
  var ITEM_WIDTH = 40;
  var ITEM_DISTANCE = 50;
  var ITEM_X = 155;
  var ITEM_Y = 90;

  // облако
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillStroke = 'rgb(0, 0, 0)';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineWidth = 2;
  ctx.lineTo(310, 15);
  ctx.lineTo(520, 10);
  ctx.lineTo(505, 145);
  ctx.lineTo(520, 280);
  ctx.lineTo(310, 275);
  ctx.lineTo(100, 280);
  ctx.lineTo(115, 145);
  ctx.lineTo(100, 10);
  ctx.closePath();
  ctx.stroke();

  // тень
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetX = 10;
  ctx.fill();

  // тень убираем
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';

  // надпись
  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 310, 30);
  ctx.font = 'normal 16px PT Mono';
  ctx.fillText('Список результатов:', 310, 48);

  // Находим шаг пропорции колонок
  var step = HISTOGRAM_HEIGHT / window.util.findMaxHeight(times);

  // строим гистограмму
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = window.util.RED_COLOR;
    } else {
      ctx.fillStyle = window.util.getRandomBlueColor();
    }
    ctx.fillRect(ITEM_X + i * (ITEM_WIDTH + ITEM_DISTANCE), ITEM_Y + (HISTOGRAM_HEIGHT - times[i] * step), ITEM_WIDTH, times[i] * step);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = 'normal 16px PT Mono';
    ctx.fillText(times[i], ITEM_X + i * (ITEM_WIDTH + ITEM_DISTANCE) + ITEM_WIDTH / 2, ITEM_Y + (HISTOGRAM_HEIGHT - times[i] * step) - 18);
    ctx.font = 'bold 16px PT Mono';
    ctx.fillText(names[i], ITEM_X + i * (ITEM_WIDTH + ITEM_DISTANCE) + ITEM_WIDTH / 2, 246);
  }

  // линия
  ctx.fillStroke = 'rgb(0, 0, 0)';
  ctx.lineWidth = 0.2;
  ctx.beginPath();
  ctx.moveTo(140, 240);
  ctx.lineTo(480, 240);
  ctx.closePath();
  ctx.stroke();
};
