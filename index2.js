let screen = document.getElementById("screen"); // selects the screen
var buttons = document.querySelectorAll("button"); // selects all the buttons
let screenValue = ""; // inital value on the screen is empty
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonText = this.innerText; //  Gets the text of that button which is clicked

    if (buttonText == "X") {
      // since the cross X sign is * multiplication sign.
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      // for clearing the screen
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      // = for calculating the arithmetic operation.
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText; // for appending inputs together
      screen.value = screenValue;
    }
  });
}
