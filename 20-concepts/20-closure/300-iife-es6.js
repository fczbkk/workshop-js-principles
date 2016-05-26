



// applied IIFE

function generateButtons() {
  var buttons = [];
  for (var i = 0; i < 10; i++) {
    
    (function (button_id) {
      var button = {
        press: function () {
          console.log("Pressed button #" + button_id);
        }
      };
      buttons.push(button);
    })(i);

  }
  return buttons;
}

var my_buttons = generateButtons();

my_buttons[0].press();  // Pressed button #0
my_buttons[1].press();  // Pressed button #1
my_buttons[2].press();  // Pressed button #2
