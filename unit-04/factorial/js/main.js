function factorial(inputNumber = 0) {
  // declare variables
  //let inputNumber = 0;
  let factorial = 1;
  let output = "";

  console.log("inputNumber: " + inputNumber);

  output = "Factorials up to " + inputNumber + ": "; // calculate factorials
  console.log("output: " + output);

  for (let j = inputNumber; j >= 1; j--) {
    // outer loop
    factorial = 1;
    for (let i = 1; i <= j; i++) {
      // inner loop
      factorial *= i;
    }
    output += j + "! = " + factorial + ", ";
    console.log("[J] Output: [" + j + "] " + output);
  }
  return output; // return
  console.log("factorial done");
}

// input
number = parseInt(prompt("Enter a number between 1 and 20"));

while ((isNaN(number) || number <= 1 || number >= 20) && number != "x") {
  number = parseInt(prompt("No doofus - enter a number between 1 and 20"));
  console.log("=== Bad Input " + number);
}
console.log("=== Input has been validated");
// output factorials

//factorial();
alert(factorial(number));
