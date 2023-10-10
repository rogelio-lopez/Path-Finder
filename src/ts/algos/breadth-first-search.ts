import createGrid from '../grid-creation.ts';
import { NodeObj } from '../interfaces.ts';

const grid: NodeObj[][] = createGrid();

console.log(bfs([3, 12], [44, 16], grid))


/* Use grid.isPath as a check to see if its been visited */

//Breadth First Search
export default function bfs(start: number[], end: number[], grid: NodeObj[][]): number[][] {

  let path: number[][] = [];
  let queue: number[][] = [start];
  let foundEnd: boolean = false;

  do {
    let x = queue[0][0];
    let y = queue[0][1];

    //go through neighbors of first element in queue
    for (let i = 0; i < grid[x][y].neighbors[i].length; i++) {
      let neighbor = grid[x][y].neighbors[i];

      //if ()
    }
  } while (queue.length != 0 || foundEnd)

  return path;
}

// Walk back function from end to start using parent nodes
