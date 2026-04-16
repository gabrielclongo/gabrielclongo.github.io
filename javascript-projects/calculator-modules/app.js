import { calculateExpression } from './math.js';

let display = document.getElementById("display");
let current = "";


window.appendValue = function(value) {
  current += value;
  display.innerText = current;
};

window.clearDisplay = function() {
  current = "";
  display.innerText = "0";
};

window.calculate = function() {
  const result = calculateExpression(current);
  display.innerText = result;
  current = result.toString();
};