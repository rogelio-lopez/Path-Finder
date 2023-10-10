"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grid_creation_1 = require("../grid/grid-creation");
var grid = (0, grid_creation_1.createGrid)();
console.log(bfs([3, 12], [44, 16], grid));
/* Use grid.isPath as a check to see if its been visited */
//Breadth First Search
function bfs(start, end, grid) {
    var path = [];
    var queue = [start];
    var foundEnd = false;
    //  do {
    var x = queue[0][0];
    var y = queue[0][1];
    //go through neighbors of first element in queue
    for (var i = 0; i < grid[x][y].neighbors[i].length; i++) {
        var neighbor = grid[x][y].neighbors[i];
        queue.push(neighbor);
    }
    // } while (queue.length != 0 || foundEnd)
    return queue;
}
exports.default = bfs;
// Walk back function from end to start using parent nodes
