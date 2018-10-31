function delayedResponse (seconds) {
  console.log('START', seconds);
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000, seconds);
  });
}

async function handleRequests () {
  var result = await Promise.all([
    delayedResponse(5),
    delayedResponse(3),
    delayedResponse(1)
  ]);
  console.log(result);
}

handleRequests();
