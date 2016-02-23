var my_object = {
  aaa: 'bbb',
  ccc: function () {
    console.log(this.aaa);
  }
};

my_object.ccc();  // 'bbb'


var my_object_instance = Object.create(my_object);
my_object_instance.aaa = 'xxx';

my_object_instance.ccc();  // 'xxx'