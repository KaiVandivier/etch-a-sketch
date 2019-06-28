
function drawScreen(edgeLength) {
  const body = document.querySelector('body');
  const gridContainer = document.createElement('div');
  gridContainer.setAttribute('id', 'grid-container');
  // TODO: set grid styles to fit right
  for (i=0; i<(edgeLength ** 2); i++) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(newSquare);
  }
  body.appendChild(gridContainer);
}

function changeColor(e) {
  e.target.style.backgroundColor = 'grey';
}

function resetScreen(e) {
  clearScreen();
  let edgeLength = prompt("How many squares per edge?")
  drawScreen(edgeLength);
}

function clearScreen() {
  const body = document.querySelector('body');
  const gridContainer = document.querySelector('#grid-container');
  if (gridContainer) body.removeChild(gridContainer);
}

drawScreen(16);
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetScreen);
