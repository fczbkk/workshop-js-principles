




// loops do not create function scope

for (var i = 1; i < 10; i++) {
  void(0);
}

console.log(i);  // 10
