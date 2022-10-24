function copyMoneroAddress() {
  // Get the text field
  var value = "";

   // Copy the text inside the text field
  navigator.clipboard.writeText(value);

  // Alert the copied text
  alert("Copied the text: " + value);
} 
