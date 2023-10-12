import { useState } from 'react';
import './App.css'
import Grid from './components/Grid';
import createGrid from './ts/grid-creation.ts';


/* For testing */
import breadthFirst from './ts/algos/breadth-first-search.ts';
import { NodeObj } from './ts/interfaces.ts';

const gridTest: NodeObj[][] = createGrid();

breadthFirst([3, 12], [44, 16], gridTest);


function App() {

  const [grid, setGrid] = useState(createGrid());
  // Pass js grid into grid component to display

  return (
    <>
      <Grid gridInfo={grid} />
    </>
  )
}

export default App;
