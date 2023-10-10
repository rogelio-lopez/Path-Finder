/* Reusable interfaces */

export interface NodeObj {
  isStart: boolean;
  isEnd: boolean;
  isPath: boolean;
  parent: NodeObj | null;
  x: number;
  y: number;
  neighbors: number[][];
}

export interface NodeGrid {
  grid: NodeObj[];
}
