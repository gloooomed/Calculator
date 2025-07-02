function calculateScientific(func) {
  var displayField = document.querySelector('input[name="display"]');
  var num = parseFloat(displayField.value);
  var result;

  if (isNaN(num)) {
    alert("Please enter a valid number.");
    return;
  }

  switch(func) {
    case 'sin':
      result = Math.sin(num);
      break;
    case 'cos':
      result = Math.cos(num);
      break;
    case 'tan':
      result = Math.tan(num);
      break;
    case 'sqrt':
      if (num < 0) {
        alert("Square root of negative numbers is not defined.");
        return;
      }
      result = Math.sqrt(num);
      break;
    case 'log10':
      if (num <= 0) {
        alert("Logarithm undefined for non-positive numbers.");
        return;
      }
      result = Math.log10 ? Math.log10(num) : Math.log(num) / Math.LN10;
      break;
    case 'log':
      if (num <= 0) {
        alert("Logarithm undefined for non-positive numbers.");
        return;
      }
      result = Math.log(num);
      break;
    default:
      alert("Invalid operation.");
      return;
  }
  displayField.value = result;
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}