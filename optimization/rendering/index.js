var total = 1000;


var target = document.querySelector('#target');


function createElement () {
  var element = document.createElement('div');
  element.style.margin = '2px 0';
  element.style.width = '100px';
  element.style.height = '10px';
  element.style.background = 'red';
  return element;
}


function renderRegular () {
  var count = 0;

  function addElement () {
    target.appendChild(createElement());
    count++;
    console.log('count', count);
    if (count < total) {
      setTimeout(addElement, 0);
    } else {
      console.log('DONE: regular');
    }
  }

  addElement();
}


function renderFragment () {
  var count = 0;
  var fragment = document.createDocumentFragment();

  function addElement () {
    fragment.appendChild(createElement());
    count++;
    if (count < total) {
      setTimeout(addElement, 0);
    } else {
      target.appendChild(fragment);
      console.log('DONE: fragment');
    }
  }

  addElement();
}


function renderSingleLoop () {
  for (var i = 0; i < total; i++) {
    var element = target.appendChild(createElement());
    element.style.width = (100 + (i * 10)) + 'px';
  }
  console.log('DONE: single loop');
}


function renderThrashing () {
  var previous_element;
  for (var i = 0; i < total; i++) {
    var new_element = target.appendChild(createElement());
    var width = (previous_element) ? previous_element.offsetWidth + 10 : 100;
    new_element.style.width = width + 'px';
    previous_element = new_element;
  }
  console.log('DONE: thrashing');
}


function removeAll () {
  target.innerHTML = '';
}