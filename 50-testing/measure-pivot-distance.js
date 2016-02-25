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

  return getHypotenuse(pivot1.x - pivot2.x, pivot1.y - pivot2.y);
}


// returns length of side of right-angled triangle opposite to right angle
function getHypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}


// returns box object representing top/left position and width/height size
// of an element
function getBox (element) {
  return element.getBoundingClientRect();
}


// returns direct distance between pivots of two elements
function measurePivotDistance (element1, element2) {
  var box1 = getBox(element1);
  var box2 = getBox(element2);

  return getPivotDistance(box1, box2);
}