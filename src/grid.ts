// Grid fucntions (Creation, Display)

import { NodeObj } from './interfaces.ts';


// Display grid Nodes as <div> with appropriate classes depending on interface labels
export function displayGrid(gridHtml: HTMLElement | null, gridArr: NodeObj[][]) {
  if (gridHtml) {

    gridHtml.innerHTML = '';

    for (let y of gridArr) {
      for (let x of y) {
        let div = document.createElement("div");
        div.setAttribute('coordinate', `${x.x}-${x.y}`);
        div.classList.add("node");

        x.isStart ? div.classList.add("start")
          : x.isEnd ? div.classList.add("end")
            : x.isPath ? div.classList.add("path")
              : x.isBlock ? div.classList.add("block") : '';

        gridHtml.append(div);
      }
    }
  }
}

// Create a 50x30 grid (default) 
export function createGrid(limitX = 50, limitY = 30): NodeObj[][] {
  const grid: Array<Array<NodeObj>> = [];

  for (let y = 0; y < limitY; y++) {
    grid[y] = [];

    for (let x = 0; x < limitX; x++) {
      grid[y][x] = {
        isStart: (x == 3 && y == 12) || false,
        isEnd: (x == 8 && y == 21) || false,
        isBlock: false,
        isPath: false,
        wasChecked: false,
        parent: null,
        x: x,
        y: y,
        neighbors: getNeighbors(x, y, limitX - 1, limitY - 1)
      }
    }
  }
  return grid;
}

// Get the coordinates [x,y] of a Node's neighbors in order of -> (top,right,bottom,left)
function getNeighbors(x: number, y: number, limitx: number, limity: number): number[][] {
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
