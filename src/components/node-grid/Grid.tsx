import React from 'react';
import Node from './Node';
import './grid.css';

const Grid: React.FC = () => {

  const grid: object[][] = [];

  for (let y = 0; y <= 29; y++) {
    grid[y] = []; //initialize arr in arr

    for (let x = 0; x <= 49; x++) {
      grid[y][x] = {
        isStart: false,
        isEnd: false,
        previous: null,
        next: null,
        pointX: x,
        pointY: y,
        coordinate: `${x},${y}`
      }
    }
  }

  return (
    <div className="grid">
      {grid.map(y =>
      (
        y.map(x => <Node nodeInfo={x} key={x.coordinate} />)
      )
      )}
    </div>
  )
}

export default Grid;
