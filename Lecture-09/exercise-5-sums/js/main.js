// Exercise 5 – Sums displayed in a table
// Modify the previous exercise (4) to insert the data into a table as illustrated in the
// following two examples.  Ensure that all results are displayed correct to 3 decimal places

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

let inputArrForOutputHTML = "";

for (i = 0; i < inputArr.length; i++) {
  //console.log("inputArr.length:" + inputArr.length);
  let popValue = Number(inputArr[i]);

  console.log("Popped value: " + popValue + " | " + typeof popValue);
  outputSum += popValue;
  console.log("outputSum: " + outputSum + " | " + typeof outputSum);
  inputArrForOutputHTML +=
    "<tr><td>" + (i + 1) + "</td><td>" + popValue.toFixed(3) + "</td></tr>";
}
let outputAvg = outputSum / countOfInputArr;

alert(
  "The values you entered were: " +
    inputArrForOutput +
    "\nNumber count: " +
    countOfInputArr.toFixed(3) +
    "\nSum: " +
    outputSum.toFixed(3) +
    "\nAverage: " +
    outputAvg
);

outputTableHTML =
  "<table><tr><th>Count</th><th>Value</th></tr>" +
  inputArrForOutputHTML +
  "</table>";
let updateMeHtml = document.getElementsByClassName("updateMe");

let FullOutputString =
  "<p>The values you entered were: </p><div>" +
  outputTableHTML +
  "</div><p><br>Sum = " +
  outputSum.toFixed(3) +
  "<br> Average = " +
  outputAvg.toFixed(3) +
  "</p>";

// console.log(FullOutputString);
if (updateMeHtml.length > 0) {
  // Update the first element's innerHTML with the stars
  updateMeHtml[0].innerHTML = FullOutputString;
} else {
  console.log("No elements with the class found.");
}
