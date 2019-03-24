class Chessboard {
  get size() {
    return this.grid.length;
  }
  static fromBoardSize = (boardSize: number) =>
    new Chessboard(
      Array.from({ length: boardSize }, () => Array(boardSize).fill(0)),
    );

  constructor(readonly grid: Array<Array<0 | 1>>) {}

  toString = () =>
    this.grid.reduce(
      (acc, row) =>
        `${acc}\n${row.reduce(
          (ac, q, i) => `${ac}${i === 0 ? '' : ', '}${q}`,
          '',
        )}`,
      '',
    );

  isQueenInRow = (y: number) => this.grid[y].some(q => q === 1);
  isQueenInColumn = (x: number) => this.grid.some(row => row[x] === 1);
  isQueenInDiagonal(x: number, y: number) {
    let [topLeftX, topLeftY] = this.getTopLeftDiagonal(x, y);
    while (topLeftX < this.grid[0].length && topLeftY < this.grid.length) {
      if (this.grid[topLeftY][topLeftX] === 1) return true;
      topLeftX++;
      topLeftY++;
    }

    let [bottomLeftX, bottomLeftY] = this.getBottomLeftDiagonal(x, y);
    while (bottomLeftX < this.grid[0].length && bottomLeftY >= 0) {
      if (this.grid[bottomLeftY][bottomLeftX] === 1) return true;
      bottomLeftX++;
      bottomLeftY--;
    }

    return false;
  }

  placeQueen(x: number, y: number) {
    if (!this.canPlaceQueen(x, y)) return null;
    const newGrid = Object.assign([], this.grid, {
      [y]: Object.assign([], this.grid[y], { [x]: 1 }),
    });
    return new Chessboard(newGrid);
  }

  private canPlaceQueen = (x: number, y: number) =>
    !this.isQueenInRow(y) &&
    !this.isQueenInColumn(x) &&
    !this.isQueenInDiagonal(x, y);

  private getTopLeftDiagonal = (x: number, y: number) => [
    Math.max(x - y, 0),
    Math.max(y - x, 0),
  ];
  private getBottomLeftDiagonal = (x: number, y: number) => [
    x - Math.min(this.size - 1 - y, x),
    y + Math.min(this.size - 1 - y, x),
  ];
}

function _findSafeQueenPositions(
  board: Chessboard,
  curRowIndex = 0,
): Array<Chessboard['grid']> {
  const ways = [];
  for (let x = 0; x < board.grid[curRowIndex].length; x++) {
    const newBoard = board.placeQueen(curRowIndex, x);
    if (newBoard === null) continue;

    if (curRowIndex === board.grid.length - 1) {
      ways.push(newBoard.grid);
    } else {
      ways.push(..._findSafeQueenPositions(newBoard, curRowIndex + 1));
    }
  }
  return ways;
}

export const findSafeQueenPositions = (boardSize: number) =>
  _findSafeQueenPositions(Chessboard.fromBoardSize(boardSize));
