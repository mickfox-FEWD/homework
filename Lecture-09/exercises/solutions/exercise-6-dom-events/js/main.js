// Select the elements we'll be working with
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const container = document.getElementById('container');

// Create a function to change the text color of a paragraph
//function random(number) {
//  return Math.floor(Math.random() * (number + 1));
//}

function changeColour() {
  // random is implemented as a Lambda function. See https://hevodata.com/learn/javascript-lambda-function/ for more details
  const random = (number) => Math.floor(Math.random() * (number + 1));

  return `rgb(${random(255)} ${random(255)} ${random(255)})`;  
}

// Add an event listener to btn1 that changes the text color of para1 when clicked
btn1.addEventListener('click', () =>{
  para1.style.backgroundColor = changeColour();
}); 

// Add an event listener to btn2 that changes the text color of para2 when clicked
btn2.addEventListener('click', () =>{
  para2.style.backgroundColor = changeColour();
}); 

// Create a new paragraph element and add it to the container
const newPara = document.createElement('p');
newPara.textContent = "New paragraph";
container.appendChild(newPara);

// Add an event listener to para1 that changes the background color to yellow when clicked
btn1.addEventListener('click', () =>{
  para1.style.backgroundColor = 'yellow';
}); 

// Add a "highlight" class to para2 when the user hovers over it, and remove the class when the user stops hovering
para2.addEventListener('mouseover', () => {
  para2.classList.add('highlight');
});
para2.addEventListener('mouseout', () => {
  para2.classList.remove('highlight');
});

// Add a "Delete" button after each paragraph that, when clicked, removes the paragraph from the DOM
const paras = document.querySelectorAll('p');

paras.forEach((para) => {
  const delBtn = document.createElement('button');
  delBtn.textContent = "Delete";
  para.appendChild(delBtn);
  // click event handler
  delBtn.addEventListener('click', () => {
    para.remove();
  });
});