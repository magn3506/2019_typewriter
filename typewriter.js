"use strict";

document.addEventListener("DOMContentLoaded", typewriter);

let text = document.querySelector("#typewriter").innerHTML;

let i = 0;

let speed = 100;

document.querySelector("#typewriter").textContent = " ";

function typewriter() {
  if (i == text.length) {
    i = 0;

    setTimeout(reset, 1000);
  } else if (i < text.length) {
    document.querySelector("#typewriter").innerHTML += text.charAt(i);
    i++;

    setTimeout(typewriter, speed);
  }
}

function reset() {
  document.querySelector("#typewriter").textContent = " ";
  typewriter();
}
