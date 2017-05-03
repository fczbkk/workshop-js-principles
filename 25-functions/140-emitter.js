function createEmitter () {
  let data = {};


  function add (event, fn) {
    if (typeof data[event] === 'undefined') {
      data[event] = [];
    }
    data[event].push(fn);

    return {
      remove: function () {
        remove(event, fn);
      }
    }
  }


  function remove (event, fn) {
    const fn_index = data[event].indexOf(fn);
    if (fn_index > -1) {
      data[event].splice(fn_index, 1);
    }
  }

  function clear () {
    data = {};
  }


  function fire (event) {
    data[event].forEach(function (fn) {
      fn();
    });
  }


  function inspect () {
    return Object.assign({}, data);
  }


  return {
    add: add,
    remove: remove,
    clear: clear,
    fire: fire,
    inspect: inspect
  }
}

const my_emitter = createEmitter();

my_emitter.add('punch', function () {
  console.log('ouch');
});

const punch_reaction = my_emitter.add('punch', function () {
  console.log('uh-oh');
});


my_emitter.add('kiss', function () {
  console.log('awww');
});

my_emitter.fire('punch');
my_emitter.fire('kiss');

punch_reaction.remove();
my_emitter.fire('punch');