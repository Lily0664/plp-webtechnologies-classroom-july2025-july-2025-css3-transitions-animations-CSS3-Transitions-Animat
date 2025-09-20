// script.js - Example for JS functions, scope, and animation triggers

// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// Global variable example
let globalCount = 0;

// Function with parameters and return value
function addNumbers(a, b) {
  // Local variable
  let sum = a + b;
  return sum;
}

// Function to show sum in the DOM
function showSum() {
  globalCount++;
  const result = addNumbers(globalCount, 5);
  document.getElementById('sum-result').textContent = `Sum: ${globalCount} + 5 = ${result}`;
}

// Function demonstrating local vs global scope
function scopeDemo() {
  let localVar = 'I am local';
  // globalCount is accessible here
  return `Global: ${globalCount}, Local: ${localVar}`;
}

// Part 3: JS triggers CSS animation by adding/removing a class
const animateBtn = document.getElementById('animate-box-btn');
const animatedBox = document.getElementById('js-animated-box');

animateBtn.addEventListener('click', function() {
  // Add the animation class
  animatedBox.classList.add('animated');
  // Remove it after animation ends so it can be triggered again
  setTimeout(() => {
    animatedBox.classList.remove('animated');
  }, 1000); // Match the animation duration in CSS
});

// You can add more reusable functions as needed!
