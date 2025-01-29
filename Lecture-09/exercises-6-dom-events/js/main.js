// Select the elements we'll be working with
const workingElement1 = document.getElementById("para1");
const workingElement2 = document.getElementById("para2");

// Create a function to change the text color of a paragraph
function changeTextColor(element, color) {
  element.style.color = color;
}

// changeTextColor(workingElement1, "red");
// changeTextColor(workingElement2, "blue");

// Add an event listener to btn1 that changes the text color of para1 when clicked

const btn1 = document.getElementById("btn1"); // find the button

btn1.addEventListener("click", function () {
  changeTextColor(workingElement1, "red");
});

// Add an event listener to btn2 that changes the text color of para2 when clicked
const btn2 = document.getElementById("btn2"); // find the button

btn2.addEventListener("click", function () {
  changeTextColor(workingElement2, "blue");
});

// Create a new paragraph element and add it to the container
const para = document.createElement("p");
para.innerHTML = "This is new a paragraph stolen from w3schools.";
document.getElementById("container").appendChild(para);
//document.body.appendChild(para);

// Add an event listener to para1 that changes the background color to yellow when clicked
function changeBGColor(element, color) {
  element.style.backgroundColor = color;
}

workingElement1.addEventListener("click", function () {
  changeBGColor(workingElement1, "yellow");
});
// Add a "highlight" class to para2 when the user hovers over it, and remove the class when the user stops hovering

const list = workingElement2.classList;
// console.log(list);
workingElement2.addEventListener("mouseover", function () {
  //   console.log("mouseover triggered");
  list.add("highlight");
});

workingElement2.addEventListener("mouseout", function () {
  // console.log("mouseout triggered");
  list.remove("highlight");
});
// Add a "Delete" button after each paragraph that, when clicked, removes the paragraph from the DOM
// Hint: Use the querySelectorAll() method to select all p elements on the page, and loop through them
// using the forEach() method. Inside the loop, create a new button element, set its text content
// using the textContent property, append it to the p element using the appendChild() method, and
//  add a click event listener to the button that removes the p element from the DOM using the
// remove() method.e previous exercise

const nodeList = document.querySelectorAll("p");

function newButton(para) {
  console.log("New button: ");

  // Create a new button
  const newPara = document.createElement("button");
  newPara.textContent = "Remove paragraph";

  // Add functionality to the button (e.g., remove the parent paragraph when clicked)
  newPara.addEventListener("click", () => {
    para.remove(); // This will remove the specific <p> when the button is clicked
  });

  // Append the button to the current paragraph
  para.appendChild(newPara);
}

// Iterate over each <p> element and call the function to add a button
nodeList.forEach(newButton);
