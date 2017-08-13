'use strict'

window.renderStatistics = function(ctx, names, times) {

// облако
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillStroke = 'rgb(0, 0, 0)';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineWidth = 3;
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

// Ищем самую высокую колонку
  var maxHeight = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    times[i] = Math.floor(times[i]);
    var time = times[i];
    if (time > maxHeight) {
      maxHeight = time;
      maxIndex = i;
    }
  }

// Находим шаг пропорции колонок
  var histogramHeight = 150;
  var step = histogramHeight / (maxHeight - 0);

// Переменные для колонок
  var itemWidth = 40;
  var itemDistance = 50;
  var itemX = 155;
  var itemY = 90;

// строим гистограмму
  for (var i = 0; i < times.length; i++) {
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      ctx.fillStyle = 'rgb(0, 0, ' + Math.floor(255-42.5*i) + ')';
    }
    ctx.fillRect(itemX + i * (itemWidth + itemDistance), itemY + (histogramHeight - times[i] * step), itemWidth, times[i] * step);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = 'normal 16px PT Mono';
    ctx.fillText(times[i], itemX + i * (itemWidth + itemDistance) + itemWidth / 2, itemY + (histogramHeight - times[i] * step) - 18);
    ctx.font = 'bold 16px PT Mono';
    ctx.fillText(names[i], itemX + i * (itemWidth + itemDistance) + itemWidth / 2, 246);
  };

// линия
  ctx.fillStroke = 'rgb(0, 0, 0)';
  ctx.lineWidth = 0.2;
  ctx.beginPath();
  ctx.moveTo(140, 240);
  ctx.lineTo(480, 240);
  ctx.closePath();
  ctx.stroke();
};
