function constructIdGenerator (max_id = 10) {
  return {
    [Symbol.iterator]: function () {
      let index = 0;

      return {
        next: function () {
          return (index < max_id)
            ? {done: false, value: index++}
            : {done: true};
        }
      }
    }
  };
}

const my_id_generator = constructIdGenerator();

for (let id of my_id_generator) {
  console.log('id', id);
}

console.log('all ids', [...my_id_generator]);