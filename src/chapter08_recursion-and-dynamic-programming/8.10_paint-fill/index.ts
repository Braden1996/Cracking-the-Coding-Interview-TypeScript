type coord = [number, number];

const outsideGrid = (grid: number[][], paintCoord: coord) =>
  paintCoord[0] < 0 ||
  paintCoord[0] >= grid[0].length ||
  paintCoord[1] < 0 ||
  paintCoord[1] >= grid.length;

const paintGridCell = (
  grid: number[][],
  paintCoord: coord,
  fillValue: number,
) => {
  const paintedGrid = grid.slice();
  paintedGrid[paintCoord[1]] = paintedGrid[paintCoord[1]].slice();
  paintedGrid[paintCoord[1]][paintCoord[0]] = fillValue;
  return paintedGrid;
};

const getAdjacentPaintCoords: (
  paintCoord: coord,
) => Array<typeof paintCoord> = paintCoord => [
  [paintCoord[0], paintCoord[1] - 1],
  [paintCoord[0] + 1, paintCoord[1]],
  [paintCoord[0], paintCoord[1] + 1],
  [paintCoord[0] - 1, paintCoord[1]],
];

export function validParenCombinations(
  grid: number[][],
  paintCoord: coord,
  fillValue: number,
  targetValue = grid[paintCoord[1]][paintCoord[0]],
): typeof grid {
  if (outsideGrid(grid, paintCoord)) return grid;
  if (grid[paintCoord[1]][paintCoord[0]] !== targetValue) return grid;

  const paintedGrid = paintGridCell(grid, paintCoord, fillValue);

  return getAdjacentPaintCoords(paintCoord).reduce(
    (g, c) => validParenCombinations(g, c, fillValue, targetValue),
    paintedGrid,
  );
}
