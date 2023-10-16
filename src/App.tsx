import { useState } from 'react';
import './App.css'
import Grid from './components/Grid';
import createGrid from './ts/grid-creation.ts';


/* For testing */
import breadthFirst from './ts/algos/breadth-first-search.ts';
import { NodeObj } from './ts/interfaces.ts';

const gridTest: NodeObj[][] = createGrid();

let bfs = breadthFirst([3, 12], [8, 21], gridTest);
console.log(bfs);

function App() {

  const [grid, setGrid] = useState(createGrid());
  // Pass js grid into grid component to display

  /* TODO
   * Change the grid visually to show the path
   *    - Use helper function to change it 
   * */

  //Handle visual changes in here? Maybe inside of setGrid function
  //setGrid(breadthFirst([3, 12], [8, 21], gridTest))


  return (
    <>
      <Grid gridInfo={grid} />
    </>
  )
}

export default App;
