/**
 * Returns X and Y coordinates of a middle point of a box.
 * @param box
 * @returns {{x: number, y: number}}
 */
function getPivot (box) {
  return {
    x: box.left + (box.width / 2),
    y: box.top + (box.height / 2)
  }
}

document.addEventListener('click', function (event) {

  const box = event.target.getBoundingClientRect()
  const other_box = document.getElementById('#myElement').getBoundingClientRect()

  const pivot = getPivot(box)
  const other_pivot = getPivot(other_box)

  console.log(Math.sqrt(Math.pow(pivot.x - other_pivot.x, 2) + Math.pow(pivot.y - other_pivot.y, 2)))

})
