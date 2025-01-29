// Using a nested for loop write a programme that accepts an integer value from the user
// The programme should calculate the factorial for this value and every subsequent value back to 1
// Check to see if the value is a number, greater than 1 and less than 20
// The generated output should look like that below

let outputCount = 1;
let outputStr = "";

inputNum = prompt("Enter a number to factorialise?");

while (isNaN(inputNum) || inputNum <= 0 || inputNum > 20) {
  alert("A number between 1 and 20 please.");
  break;
}
console.log("input is ok, continuing... [" + inputNum + "]");

for (let i = inputNum; i > 0; i--) {
  // console.log("Calculating factorial for " + i);
  for (let j = i; j > 1; j--) {
    outputCount *= j;
    //  console.log("i: " + i + " j: " + j + " output count: " + outputCount);
  }

  //console.log("i: " + i + " | Output count: " + outputCount);
  console.log(i + "! = " + outputCount);

  outputStr += i + "! = " + outputCount + "<br>";

  outputCount = 1;
}
//console.log("Output count: " + outputCount);

let updateMeHtml = document.getElementsByClassName("updateMe");

if (updateMeHtml.length > 0) {
  // Update the first element's innerHTML with the stars
  updateMeHtml[0].innerHTML = "<p><br>" + outputStr + "</p>";
} else {
  console.log("No elements with the class 'starStr' found.");
}
