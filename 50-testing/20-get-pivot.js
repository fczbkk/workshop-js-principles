// returns X and Y coordinates of box, defined by top/left position
// and width/height size
function getPivot (box) {
  return {
    x: box.left + (box.width / 2),
    y: box.top + (box.height / 2)
  }
}


document.addEventListener('click', function (event) {

  var box = event.target.getBoundingClientRect();
  var other_box = document.getElementById('#myElement').getBoundingClientRect();

  var pivot = getPivot(box);
  var other_pivot = getPivot(other_box);

  console.log(Math.sqrt(Math.pow(pivot.x - other_pivot.x, 2) + Math.pow(pivot.y - other_pivot.y, 2)));

});