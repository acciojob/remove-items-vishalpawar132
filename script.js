//your JS code here. If required.
// script.js
window.onload = function() {
  // Get the button and dropdown elements
  var button = document.querySelector("input[type='button']");
  var colorSelect = document.getElementById("colorSelect");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Get the selected option index
    var selectedOptionIndex = colorSelect.selectedIndex;

    // Remove the selected option from the dropdown
    colorSelect.remove(selectedOptionIndex);
  });
};
