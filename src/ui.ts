// UI functionality

import { NodeObj } from "./interfaces";

/* Params:  keyboard code (commands), grid array, div attribute coordinates "x-y" */
export function nodeSelection(keyCode: number, gridArr: NodeObj[][], attribute: string): NodeObj[][] {
  let updatedGrid = gridArr;
  let attr = attribute.split('-');
  let [x, y] = [Number(attr[0]), Number(attr[1])];

  // S - Start
  if (keyCode == 83) {
    updatedGrid[y][x].isStart = true;
  }
  // E - End 
  else if (keyCode == 69) {
    updatedGrid[y][x].isEnd = true;
  }
  // Q - Block
  else if (keyCode == 81) {
    //updatedGrid[y][x].isBlock = true;
  }

  return updatedGrid;
}
