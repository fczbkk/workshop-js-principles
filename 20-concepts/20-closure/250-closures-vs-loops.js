




// closures + loops = trouble

function generateButtons() {
  buttons = [];
  for (var i = 0; i < 10; i++) {
    var button = {
      press: function () {
        console.log("Pressed button #" + i);
      }
    }
    buttons.push(button);
  }
  return buttons;
}

var my_buttons = generateButtons();

my_buttons[0].press();  // Pressed button #10
my_buttons[1].press();  // Pressed button #10
my_buttons[2].press();  // Pressed button #10
