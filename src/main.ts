import { createGrid, displayGrid } from './grid.ts';
import { nodeSelection } from './ui.ts';
import breadthFirst from './algos/breadth-first-search.ts';

// Elements
let gridArr = createGrid();
const grid = document.getElementById('Grid');

//Initiate Grid 
displayGrid(grid, gridArr);

//testing displayGrid -- works
displayGrid(grid, breadthFirst([3, 12], [8, 21], gridArr));


/* Node Selection */

//capture keyboard hold
let keyCode: number | null = null;
window.onkeydown = function(e) {
  keyCode = e.keyCode;
}
window.onkeyup = function() {
  keyCode = null;
}

// Capture click, action if its using correct 'command'
grid?.addEventListener('click', function(e) {

  if (keyCode == 83 || keyCode == 69 || keyCode == 81) {
    gridArr = nodeSelection(keyCode, gridArr, e.srcElement?.attributes[0].value);
    displayGrid(grid, gridArr);
  }
})
