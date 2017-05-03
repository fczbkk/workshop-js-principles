function* createIdGenerator (max_id = 10) {
  let index = 0;
  while (index < max_id) {
    yield index++;
  }
}

const my_id_generator = createIdGenerator();

console.log('id', my_id_generator.next().value);
console.log('id', my_id_generator.next().value);
console.log('id', my_id_generator.next().value);

let next_id = my_id_generator.next();

while (!next_id.done) {
  console.log('id', next_id.value);
  next_id = my_id_generator.next();
}