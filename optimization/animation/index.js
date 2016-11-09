var duration = 3000;
var frequency = 100;
// var frequency = 1000/60;

var start_position = 0;
var end_position = 300;


function delay () {
  var result = 0;
  for (var i = 1; i < 100000000; i++) {
    result += i;
  }
  return result;
}


function getAnimationPhase (start, end) {
  var now = (new Date).getTime();
  var position = (now - start) / (end - start);
  return position > 1 ? 1 : position;
}


function calculateElementPosition (start, end, position) {
  return start + ((end - start) * position);
}


function updateElement (element, phase) {
  var position = calculateElementPosition(start_position, end_position, phase);
  element.style.left = position + 'px';
}


function startBasicAnimation (element) {
  var start_timestamp = (new Date).getTime();
  var end_timestamp = start_timestamp + duration;

  function update () {
    // delay();
    var phase = getAnimationPhase(start_timestamp, end_timestamp);
    updateElement(element, phase);
    if (phase === 1) {
      clearInterval(ticker);
    }
  }

  var ticker = setInterval(update, frequency);
}


function startSmoothAnimation (element) {
  var start_timestamp = (new Date).getTime();
  var end_timestamp = start_timestamp + duration;

  function update () {
    // delay();
    var phase = getAnimationPhase(start_timestamp, end_timestamp);
    updateElement(element, phase);
    if (phase !== 1) {
      requestAnimationFrame(update);
    }
  }

  update();
}


function startCssAnimation (element) {
  element.classList.remove('animated_box');
  element.style.left = '0px';
  element.classList.add('animated_box');
}


function animateAll () {
  startBasicAnimation(box1);
  startSmoothAnimation(box2);
  startCssAnimation(box3);
}


var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');