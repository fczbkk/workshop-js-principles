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

/**
 * Returns length of side of right-angled triangle opposite to right angle, using Pythagorean Theorem.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getHypotenuse (a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}

/**
 * Returns direct distance between pivots of two elements.
 * @param element1
 * @param element2
 * @returns {number}
 */
function measurePivotDistance (element1, element2) {
  const box1 = getBox(element1)
  const box2 = getBox(element2)

  return getPivotDistance(box1, box2)
}

/**
 * Displays distance between pivots of target element and specific element when clicked anywhere.
 * @param event
 */
function handleClick (event) {
  const element1 = event.target
  const element2 = document.getElementById('#myElement')
  console.log(measurePivotDistance(element1, element2))
}

document.addEventListener('click', handleClick)
// document.removeEventListener('click', handleClick);
