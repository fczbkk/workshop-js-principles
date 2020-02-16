document.addEventListener('click', function (event) {

  const box = event.target.getBoundingClientRect()
  const other_box = document.getElementById('#myElement').getBoundingClientRect()

  const pivot = {
    x: box.left + (box.width / 2),
    y: box.top + (box.height / 2)
  }

  const other_pivot = {
    x: other_box.left + (other_box.width / 2),
    y: other_box.top + (other_box.height / 2)
  }

  console.log(Math.sqrt(Math.pow(pivot.x - other_pivot.x, 2) + Math.pow(pivot.y - other_pivot.y, 2)))

})
