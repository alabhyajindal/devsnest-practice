"use strict";


// Randomly choose a class to be added
const classOptions = ["ftb","hgh", "yty", "sds", "qwq", "fgf"];
let appliedClass = classOptions[Math.floor(Math.random() * classOptions.length)];
console.log(appliedClass);


// Randomly choose the div to add the class to

const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.animationName = appliedClass; 
  appliedClass = classOptions[Math.floor(Math.random() * classOptions.length)];
  console.log(appliedClass);
}