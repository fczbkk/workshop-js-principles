const clickedElements = new WeakSet()

document.body.addEventListener('click', (event) => {
  const element = event.target
  console.log(
    clickedElements.has(element)
      ? 'element has been previously clicked'
      : 'never been clicked before'
  )
  clickedElements.add(element)
})

document.body.innerHTML = ''

clickedElements.size  // undefined
clickedElements.forEach  // undefined
