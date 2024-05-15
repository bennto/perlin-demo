import { gsap } from "gsap";

let xPos, yPos;
let storedXPos, storedYPos;
let mouseDown = false;
let mapW, mapH;

setMaps();

function setMaps() {
  mapW = gsap.utils.mapRange(0, innerWidth, -50, 50);
  mapH = gsap.utils.mapRange(0, innerHeight, -50, 50);
}

//update mouse coordinates
function updateMouseCoords(event) {
  xPos = mapW(event.clientX);
  yPos = mapH(event.clientY);
}

function updateMousePress() {
  mouseDown = !mouseDown;
}

window.addEventListener("mousemove", updateMouseCoords);
window.addEventListener("mouseup", updateMousePress);
window.addEventListener("mousedown", updateMousePress);
window.addEventListener("resize", setMaps);

export { xPos, yPos, storedXPos, storedYPos, mouseDown };
