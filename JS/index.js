
function calculateArea() {
  //  values from user input
  var base = parseFloat(document.getElementById('base').value);
  var height = parseFloat(document.getElementById('height').value);

  // run a check , if numbers a valid 
  if (isNaN(base) || isNaN(height)) {
    // Display an error message
    document.getElementById('result').innerHTML = 'Please enter valid numbers for base and height.';
    return;
  }

  // Calculate area
  var area = 0.5 * base * height;

  // result : 
  document.getElementById('result').innerHTML = 'Area of the triangle is ' + area;
}

// event listener for the button
document.getElementById('calculateBtn').addEventListener('click', calculateArea);
