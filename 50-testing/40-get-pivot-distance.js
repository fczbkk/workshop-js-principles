/**
 * @typedef {{top: number, left: number, width: number, height: number}} TheBox
 */

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

/**
 * Returns a box represented by top/left position and its width/height.
 * @param {Element} element
 * @returns {TheBox}
 */
function getBox (element) {
  return element.getBoundingClientRect()
}

/**
 * Returns distance between pivots of two boxes.
 * @param {TheBox} box1
 * @param {TheBox} box2
 * @returns {number}
 */
function getPivotDistance (box1, box2) {
  const pivot1 = getPivot(box1)
  const pivot2 = getPivot(box2)

  return Math.sqrt(Math.pow(pivot1.x - pivot2.x, 2) + Math.pow(pivot1.y - pivot2.y, 2))
}

document.addEventListener('click', function (event) {

  const box1 = getBox(event.target)
  const box2 = getBox(document.getElementById('#myElement'))

  console.log(getPivotDistance(box1, box2))

})
