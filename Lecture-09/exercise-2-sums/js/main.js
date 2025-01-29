// Exercise 2 - Sums
// Create a new folder called “exercise-2-sums”
// Write a script which asks the user to enter a set of 5 numbers
// The program should print the sum of the numbers inputted and average to the DOM (HTML doc) and to the console

let outputCount = 0;

inputstring = prompt("Enter a set of 5 numbers?"); // loop

let myArray = inputstring.split(" ");

if (myArray.length == 5) {
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = +myArray[i];
    outputCount += myArray[i];
    console.log("i: " + i + " | Output count: " + outputCount);
  }
  console.log("Output count: " + outputCount);
  outputAvg = outputCount / 5;

  alert(
    "The values entered were: " +
      inputstring +
      "\nSum: " +
      outputCount +
      "\nAverage: " +
      outputAvg
  );
} else alert("bad input, needed 5 numbers separated by spaces");

let updateMeHtml = document.getElementsByClassName("updateMe");

if (updateMeHtml.length > 0) {
  // Update the first element's innerHTML with the stars
  updateMeHtml[0].innerHTML =
    "<p>The values entered were: " +
    inputstring +
    "<br>Sum = " +
    outputCount +
    "<br> Average = " +
    outputAvg +
    "</p>";
} else {
  console.log("No elements with the class 'starStr' found.");
}
