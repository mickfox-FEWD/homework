//Write a function randomAverage(n) that generates n random real numbers
// between 0 and 1 and then returns the average of those n values. Statistically,
// calling randomAverage(n) will produce results that become closer to 0.5 as the
// value of n increases. Write a main program that displays the result of calling
// randomAverage on 1, 10, 100, 1000, 10000, 100000, and 1000000. See Math.random()
// for details on how to generate a random number
function randomAverage(n) {
  let workingArray = [];

  // generate array of n random numbers
  for (let i = 1; i <= n; i++) {
    let randomNum = Math.random();
    console.log("--iteration " + i);
    console.log("  Generated random number: " + randomNum);
    workingArray.push(randomNum);
    console.log("  Generated array so far: " + workingArray);
  }
  let numberOfElements = workingArray.length;
  // calculate average of array of n random numbers
  // safe to reuse i variable
  let accumulator = 0;

  for (let i = 1; i <= numberOfElements; i++) {
    let poppedValue = workingArray.pop();
    console.log("  Popped value: " + poppedValue);
    accumulator += poppedValue;
    console.log(
      "  After " + i + " iterations, Accumulator is now " + accumulator
    );
  }
  console.log("Returning " + accumulator / numberOfElements);
  return accumulator / numberOfElements;
}

// MAIN

inputNumber = prompt("How many random numbers do you want to generate?");

alert(
  "Input was : " + inputNumber + "\nOutput is: " + randomAverage(inputNumber)
);
