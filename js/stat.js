'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_TEXT_X = 140;
  var GAP = 10;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_X = 140;
  var BAR_Y = 100;
  var BAR_GAP = 50;
  var TIME_Y = 75;
  var PLAYERS_Y = 260;

  var COLORS = {
    white: '#fff',
    black: '#000',
    black07: 'rgba(0, 0, 0, 0.7)',
    red: 'rgba(255, 0, 0, 1)'
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (numArray) {
    return Math.max.apply(null, numArray);
  };

  var renderPlayerStat = function (index, ctx, playerName, playerTime, maxTime) {
    var getRandomInt = Math.round(Math.random() * 100);
    var barVariableHeight = BAR_HEIGHT - ((BAR_HEIGHT * playerTime) / maxTime);
    var barVariableY = BAR_Y + barVariableHeight;
    ctx.fillStyle = COLORS.black;
    ctx.fillText(Math.round(playerTime), CLOUD_TEXT_X + (BAR_WIDTH + BAR_GAP) * index, TIME_Y + barVariableHeight);
    ctx.fillText(playerName, CLOUD_TEXT_X + (BAR_WIDTH + BAR_GAP) * index, PLAYERS_Y);
    if (playerName === 'Вы') {
      ctx.fillStyle = COLORS.red;
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandomInt + '%, 50%)';
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * index, barVariableY, BAR_WIDTH, (BAR_HEIGHT * playerTime) / maxTime);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, COLORS.black07);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, COLORS.white);

    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillStyle = COLORS.black;
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 35);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, 55);

    var maxTime = getMaxElement(times);

    names.forEach(function (currentValue, index) {
      renderPlayerStat(index, ctx, currentValue, times[index], maxTime);
    });
  };
})();
