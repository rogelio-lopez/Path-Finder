//Breadth First Search

import { NodeObj } from '../interfaces.ts';
import { cordinatesEqual } from '../helper-funcs.ts';

export default function breadthFirst(start: number[], end: number[], grid: NodeObj[][]): number[][] {

  let queue: number[][] = [start];

  // grid[y][x] to find the node 
  // queue.push() to add to the end of array
  // Use queue.slice(1) to return new array without first element


  for (let j = 0; j < 10; j++) {
    /* TODO
     * 1. testing if adding to queue works
     * 2. Refresh queue and take out first element
     * Expected result []
    */
    let x = queue[0][0];
    let y = queue[0][1];

    // Use grid.isPath as a check to see if its been visited 
    //go through neighbors of first element in queue (careful with infinite loop)
    for (let i = 0; i < grid[x][y].neighbors[i].length; i++) {
      let neighbor = grid[x][y].neighbors[i];

      if (cordinatesEqual(neighbor, end)) {
        // End loop & call walk back function outside of loop
      }
    }
  }

  return queue;
}


// Check if cordinate [x,y] is in the queue array
function isInQueue(cord: number[], queue: number[][]): boolean {

  for (let c of queue) {
    if (cordinatesEqual(cord, c)) {
      return true;
    }
  };

  return false;
}
