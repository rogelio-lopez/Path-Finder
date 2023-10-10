import { useState } from 'react';
import './App.css'
import Grid from './components/Grid';
import createGrid from './ts/grid-creation.ts';


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
