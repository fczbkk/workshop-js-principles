// returns X and Y coordinates of box, defined by top/left position
// and width/height size
function getPivot (box) {
  return {
    x: box.left + (box.width / 2),
    y: box.top + (box.height / 2)
  }
}


// returns direct distance between pivots of two boxes
function getPivotDistance(box1, box2) {
  var pivot1 = getPivot(box1);
  var pivot2 = getPivot(box2);

  return Math.sqrt(Math.pow(pivot1.x - pivot2.x, 2) + Math.pow(pivot1.y - pivot2.y, 2));
}


// returns box object representing top/left position and width/height size
// of an element
function getBox (element) {
  return element.getBoundingClientRect();
}


document.addEventListener('click', function (event) {

  var box1 = getBox(event.target);
  var box2 = getBox(document.getElementById('#myElement'));

  console.log(getPivotDistance(box1, box2));

});