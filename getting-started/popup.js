// get various html objects based on classes (id in the case of output)
var buttons = document.getElementsByClassName("button");
var operators = document.getElementsByClassName("buttonOperator");
var equals = document.getElementsByClassName("calculate");
var clear = document.getElementsByClassName("clear");
var output = document.getElementById("output");

// initialize values to track
let firstValue = "";
let secondValue = "";
let currentOperator = null;
let temp = null;

// add event listener for clear button
clear[0].addEventListener("click", function () {
  // if clear is pressed, reset all data
  firstValue = "";
  secondValue = "";
  currentOperator = null;
  temp = null;
  output.innerHTML = 0;
});

// add even listener for equals button
equals[0].addEventListener("click", function () {
  // determine what current operator is, execute relevant operation
  if (currentOperator === "+") {
    // each output value is turned into a string and sliced to prevent it running off the page
    output.innerHTML = String(Number(firstValue) + Number(secondValue)).slice(0,13);
  } else if (currentOperator === "-") {
    output.innerHTML = String(Number(firstValue) - Number(secondValue)).slice(0,13);
  }
    else if (currentOperator === "/"){
      output.innerHTML = String(Number(firstValue) / Number(secondValue)).slice(0, 13);
    }
    else if (currentOperator === "*"){
      output.innerHTML = String(Number(firstValue) * Number(secondValue)).slice(0,13);
    }
  
  // after operation is complete, set temp equal to current output value
  temp = Number(output.innerHTML)
  // reset all other values
  firstValue = "";
  secondValue = "";
  currentOperator = null;
});

// add event listener for each operator button
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    // if first value is empty string and temp is defined, we determine that the user wants
    // to perform the operation on the current value(temp)
    if (firstValue === "" && temp){
      firstValue = temp
    }
    // update currentOperator so we know what operation to perform when the user clicks equals
    currentOperator = this.getAttribute("id");
    output.innerHTML = currentOperator;
    console.log(currentOperator);
  });
}

// add event listener for each number button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // if currentOperator is not defined, we determine that the user is trying to change the 
    // first value
    if (!currentOperator) {
      // concat value to first value
      firstValue += this.getAttribute("id");
      // make number to remove 0's at the front
      firstValue = Number(firstValue)
      // finally update shown value 
      output.innerHTML = firstValue;
      console.log("first value: " + firstValue);
    } 
    // otherwise the user is changing the secon value
    else {
      // in this case perform exact same operation on second value
      secondValue += this.getAttribute("id");
      secondValue = Number(secondValue)
      output.innerHTML = secondValue;
      console.log("Second Val: " + secondValue);
    }
  });
}

// The body of this function will be execuetd as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
