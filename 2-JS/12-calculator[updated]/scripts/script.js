// Displaying calculation from local storage when page first loads
let calculation = localStorage.getItem('calculation') || '';

// Function to show calculation on webpage
function displayCalculation() {
  const calculationText = document.querySelector('.calculation-text');
  calculationText.innerText = calculation;

  // Store the current calculation in local storage
  localStorage.setItem('calculation', calculation);
}

// Function for Handling key press events
function handleKeyPress(event) {
  const key = event.key;

  // Check if the pressed key is a number or operator
  if (
    !isNaN(key) ||
    key === '+' ||
    key === '-' ||
    key === '*' ||
    key === '/' ||
    key === '.'
  ) {
    calculation += key;
    displayCalculation();
    console.log(calculation);
  } else if (key === 'Enter') {
    calculation = eval(calculation).toString();
    displayCalculation();
  } else if (key === 'Backspace') {
    calculation = calculation.toString().slice(0, -1);
    displayCalculation();
  } else if (key === 'Escape') {
    calculation = '';
    displayCalculation();
  }
}
