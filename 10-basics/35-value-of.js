var crazy_value = {

  // keep true/false state saved in object
  curent_state: false,

  // this overwrites native `valueOf` method defined in Object.prototype
  valueOf: function () {
    this.current_state = !this.current_state;
    return this.current_state;
  }

};

// loose comparison calls `valueOf()` when coercing
console.log(crazy_value == true);   // true
console.log(crazy_value == false);  // true

// strict comparison works as expected
console.log(crazy_value === true);
console.log(crazy_value === false);
