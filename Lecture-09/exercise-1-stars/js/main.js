// Declare variables
let numberOfStars = 0;
let outputStars = ""; // inputs

numberOfStars = prompt("Enter the number of stars?"); // loop

// check that user entered a number and that it is greater than zero // otherwise ask user to enter another number

while (isNaN(numberOfStars) || numberOfStars <= 0) {
  alert("You did not enter a number greater than zero.");
  numberOfStars = prompt("Enter a number greater than zero?");
}

for (let i = 0; i < numberOfStars; i++) {
  outputStars += "*";
} // output
//alert("Outputting " + numberOfStars + " stars: " + outputStars);
console.log(outputStars);

let starsForHtml = document.getElementsByClassName("starStr");

if (starsForHtml.length > 0) {
  // Update the first element's innerHTML with the stars
  starsForHtml[0].innerHTML = "<p>" + outputStars + "</p>";
} else {
  console.log("No elements with the class 'starStr' found.");
}

//console.log(starsForHtml);
//console.log(starsForHtml[0]);
