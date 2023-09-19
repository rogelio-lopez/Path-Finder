import React from 'react';
import Node from './Node';
import './grid.css';

function getNeighbors(x: number, y: number): number[] { // add extra [] to return type
  return [x, y];
}

const Grid: React.FC = () => {

  const limitX: number = 50;
  const limitY: number = 30;
  const grid: object[][] = [];

  for (let y = 0; y <= limitY - 1; y++) {
    grid[y] = [];

    for (let x = 0; x <= limitX - 1; x++) {
      grid[y][x] = {
        isStart: (x == 3 && y == 12) || false,
        isEnd: (x == 44 && y == 16) || false,
        isPath: false,
        parent: null,
        x: x,
        y: y,
        neighbors: getNeighbors(x, y)
      }
    }
  }

  return (
    <div className="grid">
      {grid.map(y =>
      (
        y.map(nde => <Node nodeInfo={nde} key={`${nde.x}-${nde.y}`} />)
      )
      )}
    </div>
  )
}

export default Grid;


/* TODO 
 * add neighbor nodes 
 * */
