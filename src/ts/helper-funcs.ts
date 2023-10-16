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

// Visual/property Changes to grid array
export function walkBack(coords: number[][], grid: NodeObj[][]): NodeObj[][] {
  for (let c of coords) {
    let [x, y] = [c[0], c[1]];
    grid[y][x].isPath = true;
  }

  return grid;
}

//Walk Back for coordinates
export function walkBackCoordinates(coord: number[], grid: NodeObj[][]): number[][] {
  let [x, y] = [coord[0], coord[1]];

  if (grid[y][x].parent != null) {
    let parentCoord = [grid[y][x].parent.x, grid[y][x].parent.y];

    return [...walkBackCoordinates(parentCoord, grid), [x, y]]
  }
  else {
    return [[x, y]];
  }
}
