// Helper functions that may be used throughout program

import { NodeObj } from './interfaces.ts';


// Are two coordinates equal ([x,y] = [x,y]?)
export function cordinatesEqual(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Marks path from walkBackCoordinates() as isPath = true (visual mainly)
export function walkBackPathMarking(path: number[][], grid: NodeObj[][]): NodeObj[][] {
  for (let c of path) {
    grid[c[1]][c[0]].isPath = true;
  }
  return grid;
}

// Walk Back to get the path of coordinates [x,y]
export function walkBackCoordinates(endCoord: number[], grid: NodeObj[][]): number[][] {
  let [x, y] = [endCoord[0], endCoord[1]];

  if (grid[y][x].parent != null) {
    let parentCoord = [grid[y][x].parent.x, grid[y][x].parent.y];

    return [...walkBackCoordinates(parentCoord, grid), [x, y]]
  }
  else {
    return [[x, y]];
  }
}
