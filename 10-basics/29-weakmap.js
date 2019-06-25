const clickedElements = new WeakMap()

document.body.addEventListener('click', (event) => {
  const element = event.target
  if (clickedElements.has(element)) {
    const count = clickedElements.get(element)
    console.log(`has been previously clicked ${count} times`)
    clickedElements.set(element, count + 1)
  } else {
    console.log('never been clicked before')
    clickedElements.set(element, 0)
  }
})

document.body.innerHTML = ''

clickedElements.size  // undefined
clickedElements.forEach  // undefined
