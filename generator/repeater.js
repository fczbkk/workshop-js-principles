function* createRepeater () {
  let custom_value;
  while (true) {
    custom_value = yield 'Your input: ' + custom_value;
  }
}

const my_repeater = createRepeater();

console.log(my_repeater.next().value);
console.log(my_repeater.next('aaa').value);
console.log(my_repeater.next().value);
console.log(my_repeater.next('bbb').value);