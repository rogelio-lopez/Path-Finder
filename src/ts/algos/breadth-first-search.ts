//Breadth First Search

import { NodeObj } from '../interfaces.ts';
import { cordinatesEqual, walkBackCoordinates } from '../helper-funcs.ts';

export default function breadthFirst(start: number[], end: number[], grid: NodeObj[][]): number[][] {

  let queue: number[][] = [start];
  let endFound: boolean = false;

  do {
    // first node in queue x & y
    let [x, y] = [queue[0][0], queue[0][1]];

    // Loop through neighbors for grid[y][x]
    for (let i = 0; i < grid[y][x].neighbors.length; i++) {

      let neighborCoord = grid[y][x].neighbors[i];
      let neighborNode = grid[neighborCoord[1]][neighborCoord[0]];

      //End
      if (cordinatesEqual(neighborCoord, end)) {
        neighborNode.parent = grid[y][x];
        endFound = true;
      }

      //Check Nodes
      else if (!neighborNode.wasChecked && !neighborNode.isStart) {
        queue.push(neighborCoord);
        neighborNode.wasChecked = true;
        neighborNode.parent = grid[y][x];
      }
    }

    // remove first item in queue
    queue = queue.slice(1);

  } while (!endFound);

  //return callback
  return walkBackCoordinates(end, grid);
}
