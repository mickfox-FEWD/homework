//Write a function called "multiplyArray" that takes an array
// of numbers as a parameter and returns the product of all the
// numbers in the array.

function multiplyArray(arr) {
  let output = 1;
  let arrPop = 0;
  console.log("entering multiplyArray function with input array: " + arr);
  while ((arrPop = arr.pop())) {
    console.log("Popped from the array: " + arrPop);
    output *= arrPop;
    console.log("Cumulative output so far: " + output);
  }
  return output;
}

// MAIN

let number = 1; // temp value to get into the loop, will be overwritten
let inputArr = [];

//get input array
while (number > 0) {
  number = prompt("Enter a positive integer for array  (-1 to stop)");
  console.log("inputted number is: " + number);
  if (number > 0) inputArr.push(number);
  else break;
  console.log("Full array now is: " + inputArr);
}

alert(
  "Input was : " +
    inputArr +
    "\nMultiple of all array elements is: " +
    multiplyArray(inputArr)
);
