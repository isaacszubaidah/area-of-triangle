
function calculateArea() {
  //  values from user input
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);

  // run a check , if numbers a valid 
  if (isNaN(base) || isNaN(height)) {
    // Display an error message
    document.getElementById('result').innerHTML = 'Please enter valid numbers for base and height.';
    return;
  }

  // Calculate area
  const area = 0.5 * base * height;

  // result : 
  document.getElementById('result').innerHTML = 'Area of the triangle is ' + area;
}

// event listener for the button
document.getElementById('getArea').addEventListener('click', calculateArea);
