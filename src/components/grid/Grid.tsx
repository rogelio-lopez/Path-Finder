import React, { useEffect } from 'react';

const Grid: React.FC = () => {

  const grid_el = document.querySelector('.grid');
  const grid: Node[][] = [];

  interface Node {
    previous: Node | null;
    next: Node | null;
    isOpen: boolean;
    isUsed: boolean;
    isObstacle: boolean;
  }

  useEffect(() => {
    // Initialize grid "memory" array
    for (let x = 0; x <= 50; x++) {

      grid[x] = []; //initialize arr in arr

      for (let y = 0; y <= 35; y++) {
        const obj: Node = {
          previous: null,
          next: null,
          isOpen: true,
          isUsed: false,
          isObstacle: false
        }

        grid[x][y] = obj;
      }
    }
  }, [grid]);

  return (
    <div className="grid">
      hello world
    </div>
  )
}

export default Grid;
