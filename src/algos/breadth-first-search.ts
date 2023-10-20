//Breadth First Search

import { NodeObj } from '../interfaces.ts';
import { cordinatesEqual, walkBackCoordinates, walkBackPathMarking } from '../helper-funcs.ts';

export default function breadthFirst(start: number[], end: number[], grid: NodeObj[][]): NodeObj[][] {

  let gridReturn = grid;
  let queue: number[][] = [start];
  let endFound: boolean = false;

  do {
    // first node in queue x & y
    let [x, y] = [queue[0][0], queue[0][1]];

    // Loop through neighbors for grid[y][x]
    for (let i = 0; i < gridReturn[y][x].neighbors.length; i++) {

      let neighborCoord = gridReturn[y][x].neighbors[i];
      let neighborNode = gridReturn[neighborCoord[1]][neighborCoord[0]];

      //End
      if (cordinatesEqual(neighborCoord, end)) {
        neighborNode.parent = gridReturn[y][x];
        endFound = true;
      }

      //Check Nodes
      else if (!neighborNode.wasChecked && !neighborNode.isStart) {
        queue.push(neighborCoord);
        neighborNode.wasChecked = true;
        neighborNode.parent = gridReturn[y][x];
      }
    }

    // remove first item in queue
    queue = queue.slice(1);

  } while (!endFound);

  // Walks back from end to start to find path cordinated number[][]
  let path = walkBackCoordinates(end, grid);

  // Returns new grid with path nodes ^ marked as isPath = true
  return walkBackPathMarking(path, gridReturn);
}
