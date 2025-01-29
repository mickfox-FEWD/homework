// Exercise 4 – Sums using while loop
// Create a new folder called “exercise-4-sums”
// Modify the solution from exercise 2 to write a script that asks the user to enter a range of positive
// values (-1 to quit) and then prints the sum and average of the values
// You will need two while loops and an if statement
// You must keep a record of the number of entries i.e. a count of how many numbers the user enters
// The generated output should look similar to that below

let outputCount = 0;
let inputString = "";
let inputArr = [];
let outputSum = 0;

while (inputString != "-1") {
  inputString = prompt("Enter some positive integers, -1 to finish"); // loop
  if (inputString > 0) {
    //console.log("inputString:" + inputString);
    inputArr.push(inputString);
    //console.log("inputArr.length: " + inputArr.length);
  }
}
console.log(inputArr);
let countOfInputArr = inputArr.length;
let inputArrForOutput = inputArr.toString();

while (inputArr.length > 0) {
  //console.log("inputArr.length:" + inputArr.length);
  let popValue = inputArr.pop();
  //console.log("Popped value: " + popValue);
  outputSum += parseInt(popValue);
  //console.log("outputSum: " + outputSum);
}
let outputAvg = outputSum / countOfInputArr;

alert(
  "The values you entered were: " +
    inputArrForOutput +
    "\nNumber count: " +
    countOfInputArr +
    "\nSum: " +
    outputSum +
    "\nAverage: " +
    outputAvg
);

let updateMeHtml = document.getElementsByClassName("updateMe");

if (updateMeHtml.length > 0) {
  // Update the first element's innerHTML with the stars
  updateMeHtml[0].innerHTML =
    "<p>The values you entered were: " +
    inputArrForOutput +
    "<br>Number count: " +
    countOfInputArr +
    "<br>Sum = " +
    outputSum +
    "<br> Average = " +
    outputAvg +
    "</p>";
} else {
  console.log("No elements with the class found.");
}
