function resolveAfterWait (wait) {
  return new Promise((resolve) => {
    setTimeout(resolve, wait)
  })
}

function rejectAfterWait (wait) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, wait)
  })
}

function requestData () {
  return Promise.race([
    resolveAfterWait(3000),
    rejectAfterWait(2000)
  ])
}

requestData()
  .then(() => console.log('success'))
  .catch(() => console.error('fail'))
