import { NodeObj } from './interfaces.ts';

export default function createGrid(limitX = 50, limitY = 30): NodeObj[][] {
  const grid: Array<Array<NodeObj>> = [];

  for (let y = 0; y < limitY; y++) {
    grid[y] = [];

    for (let x = 0; x < limitX; x++) {
      grid[y][x] = {
        isStart: (x == 3 && y == 12) || false,
        isEnd: (x == 44 && y == 16) || false,
        isPath: false,
        parent: null,
        x: x,
        y: y,
        neighbors: getNeighbors(x, y, limitX - 1, limitY - 1)
      }
    }
  }
  return grid;
}


function getNeighbors(x: number, y: number, limitx: number, limity: number): number[][] { // add extra [] to return type
  if (x == 0 || x == limitx) {   // Corner and Y side nodes
    if (y == 0) {
      return [[x, y + 1], [...(x == 0) ? [x + 1] : [x - 1], y]]; // Top left, top right
    }
    else if (y == limity) {
      return [[x, y - 1], [...(x == 0) ? [x + 1] : [x - 1], y]]; // Bottom corners
    }
    else {
      return [[...(x == 0) ? [x + 1] : [x - 1], y], [x, y - 1], [x, y + 1]]; // Y sides 
    }
  }
  else if (y == 0 || y == limity) {   // X side nodes 
    return [[x, ...(y == 0) ? [y + 1] : [y - 1]], [x + 1, y], [x - 1, y]];
  }
  else {   // Middle nodes
    return [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
  }
}
