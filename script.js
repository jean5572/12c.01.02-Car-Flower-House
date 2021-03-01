"use strict";
document.addEventListener("DOMContentLoaded", init);

async function init() {
  document.querySelector(".outDoor").addEventListener("click", startAnimationDoor);
  document.querySelector(".carGroup").addEventListener("click", startAnimationCar);
}

function startAnimationDoor() {
  console.log("door clicked");
  document.querySelector(".outDoor").classList.add("moveDoor");
}
function startAnimationCar() {
  console.log("car clicked");
  document.querySelector(".carGroup").classList.add("carDrive");
}
