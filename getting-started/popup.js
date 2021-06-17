var buttons = document.getElementsByClassName("button");
var operators = document.getElementsByClassName("buttonOperator");
var equals = document.getElementsByClassName("calculate");
var clear = document.getElementsByClassName("clear");
var output = document.getElementById("output");

let firstValue = "";
let secondValue = "";
let currentOperator = null;

clear[0].addEventListener("click", function () {
  firstValue = "";
  secondValue = "";
  currentOperator = null;
  output.innerHTML = 0;
});

equals[0].addEventListener("click", function () {
  if (currentOperator === "+") {
    output.innerHTML = Number(firstValue) + Number(secondValue);
  } else if (currentOperator === "-") {
    output.innerHTML = Number(firstValue) - Number(secondValue);
  }
    else if (currentOperator === "/"){
      output.innerHTML = String(Number(firstValue) / Number(secondValue)).slice(0, 13);
    }
    else if (currentOperator === "*"){
      output.innerHTML = Number(firstValue) * Number(secondValue);
    }
  firstValue = "";
  secondValue = "";
  currentOperator = null;
});

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    currentOperator = this.getAttribute("id");
    output.innerHTML = currentOperator;
    console.log(currentOperator);
  });
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (!currentOperator) {
      firstValue += this.getAttribute("id");
      firstValue = Number(firstValue)
      output.innerHTML = firstValue;
      console.log("first value: " + firstValue);
    } else {
      secondValue += this.getAttribute("id");
      secondValue = Number(secondValue)
      output.innerHTML = secondValue;
      console.log("Second Val: " + secondValue);
    }
  });
}

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
