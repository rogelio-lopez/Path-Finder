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
  // Corner and Y side nodes
  if (x == 0 || x == limitx) {
    // Top corners
    if (y == 0) {
      if (x == 0) {
        return [[x + 1, y], [x, y + 1]];
      }
      else {
        return [[x, y + 1], [x - 1, y]];
      }
    }
    // Bottom corners
    else if (y == limity) {
      if (x == 0) {
        return [[x, y - 1], [x + 1, y]];
      }
      else {
        return [[x, y - 1], [x - 1, y]];
      }
    }
    // Y-axis sides 
    else {
      if (x == 0) {
        return [[x, y - 1], [x + 1, y], [x, y + 1]];
      }
      else {
        return [[x, y - 1], [x, y + 1], [x - 1, y]];
      }
    }
  }
  else if (y == 0 || y == limity) {   // X-axis side nodes 
    if (y == 0) {
      return [[x + 1, y], [x, y + 1], [x - 1, y]];
    }
    else {
      return [[x, y - 1], [x + 1, y], [x - 1, y]];
    }
  }
  else {   // Middle nodes
    return [[x, y - 1], [x + 1, y], [x, y + 1], [x - 1, y]];
  }
}
