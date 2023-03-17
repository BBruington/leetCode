// Given an m x n 2D binary grid grid which represents 
// a this.map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands 
// horizontally or vertically. You may assume all four edges of the grid are all 
// surrounded by water.

const numIslands = function(grid) {
  let islands = 0;
  for(let i = 0; i<grid.length; i++) {
    for(let j = 0; j< grid[i].length; j++) {
      if(grid[i][j] === "1"){
        islands = islands + findIsland(grid, i, j);
      }
    }
  }
  function findIsland(grid, row, col) {
    if(row < 0 || row > grid.length - 1 || col < 0 || col > grid[row].length - 1 || grid[row][col] === "0") return
    grid[row][col] = "0"
    findIsland(grid, row + 1, col)
    findIsland(grid, row - 1, col)
    findIsland(grid, row, col + 1)
    findIsland(grid, row, col - 1)
    return 1
  }
  return islands;
};

