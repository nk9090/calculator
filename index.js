let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    var buttonText = e.target.innerHTML;
    if (buttonText == "X") {
      buttonText = "*";
      string = string + buttonText;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

// var buttonText = this.innerText;

// if (buttonText == "X") {

//   buttonText = "*";
//   screenValue += buttonText;
//   screen.value = screenValue;
// }
