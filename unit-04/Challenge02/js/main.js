//Write a function drawConsolePyramid(height) that draws a pyramid of the specified
//height in which the width of each row increases by two as you move downward on the console.
//Each of the rows should be centered with respect to the others, and the bottom line should
//begin at the left margin. Thus, calling drawConsolePyramid(8) should produce the following figure:

function drawConsolePyramid(height) {
  inputNumber = height;
  offset = Math.ceil(inputNumber);
  console.log("offset = " + offset);
  trunkOffset = offset;
  console.log("called drawConsolePyramid: " + inputNumber);
  output = "";

  if (inputNumber > 0) {
    for (let i = 1; i <= inputNumber; i++) {
      // inner loop
      console.log("-----iteration number: " + i);

      output += " ".repeat(offset) + "*".repeat(2 * i - 1) + "\n";
      console.log("Output so far: \n" + output);
      offset--;
    }
    //draw the tree trunk
    output += " ".repeat(trunkOffset) + "*\n";
    //console.log("done with function, returning: " + output);
    return output;
  } else alert("Number out of bounds");
}

// MAIN
number = parseInt(prompt("Challenge 01 - Enter a positive integer "));

while ((isNaN(number) || number <= 1) && number != "x") {
  number = parseInt(prompt("No doofus - Enter a positive integer"));
  console.log("=== Bad Input " + number);
}
console.log("=== Input has been validated: " + number);

console.log(drawConsolePyramid(number));
