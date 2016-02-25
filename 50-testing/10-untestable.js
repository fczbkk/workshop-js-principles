document.addEventListener('click', function (event) {

  var box = event.target.getBoundingClientRect();
  var other_box = document.getElementById('#myElement').getBoundingClientRect();

  var pivot = {
    x: box.left + (box.width / 2),
    y: box.top + (box.height / 2)
  };

  var other_pivot = {
    x: other_box.left + (other_box.width / 2),
    y: other_box.top + (other_box.height / 2)
  };

  console.log(Math.sqrt(Math.pow(pivot.x - other_pivot.x, 2) + Math.pow(pivot.y - other_pivot.y, 2)));

});