var prefix_counter = 0;
console.log('prefix', prefix_counter);
console.log('prefix', ++prefix_counter);
console.log('prefix', prefix_counter);


var postfix_counter = 0;
console.log('postfix', postfix_counter);
console.log('postfix', postfix_counter++);
console.log('postfix', postfix_counter);


var loop_counter = 0;
while (loop_counter++ < 3) {
  console.log('loop counter', loop_counter);
}