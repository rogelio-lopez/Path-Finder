import { createGrid, displayGrid } from './grid.ts';
import breadthFirst from './algos/breadth-first-search.ts';

// Elements
const grid = document.getElementById('Grid');
const gridArr = createGrid();


//Initiate Grid 
displayGrid(grid, gridArr);

//testing displayGrid -- works
displayGrid(grid, breadthFirst([3, 12], [8, 21], gridArr));

/* TODO 
 * Add animations (display in intervals)
 * Add click to add start in finish (this might be easier/ more doable this week)
 * */
