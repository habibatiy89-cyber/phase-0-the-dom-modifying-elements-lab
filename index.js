// Write your code here!
// Remove the 'main' element from the page
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Give it an id of 'victory'
newHeader.id = "victory";

// Set the text inside the <h1>
newHeader.textContent = "Habibty Noor is the champion";

// Append the new <h1> to the body
document.body.append(newHeader);