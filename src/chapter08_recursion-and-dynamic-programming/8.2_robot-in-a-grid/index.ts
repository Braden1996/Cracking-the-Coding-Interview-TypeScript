const isOffLimits = (grid: boolean[][], curPos: [number, number]) =>
  grid[curPos[1]][curPos[0]];
const isBottomRight = (grid: boolean[][], curPos: [number, number]) =>
  curPos[0] === grid[0].length - 1 && curPos[1] === grid.length - 1;

export function getPathToBottomRight(
  grid: boolean[][],
  curPos: [number, number] = [0, 0],
  memo: Array<Array<Array<typeof curPos> | null>> = Array(grid.length)
    .fill(0)
    .map(_ => Array(grid[0].length)),
): Array<typeof curPos> | null {
  const checkMemo = memo[curPos[1]][curPos[0]];
  if (checkMemo !== undefined) return checkMemo;

  let pathOutcome: Array<typeof curPos> | null | undefined;

  if (isOffLimits(grid, curPos)) pathOutcome = null;
  if (isBottomRight(grid, curPos)) pathOutcome = [];

  if (pathOutcome === undefined) {
    if (curPos[0] < grid[0].length - 1) {
      const right: typeof curPos = [curPos[0] + 1, curPos[1]];
      pathOutcome = getPathToBottomRight(grid, right, memo);
    }

    if (!Array.isArray(pathOutcome) && curPos[1] < grid.length - 1) {
      const down: typeof curPos = [curPos[0], curPos[1] + 1];
      pathOutcome = getPathToBottomRight(grid, down, memo);
    }
  }

  pathOutcome = Array.isArray(pathOutcome)
    ? [curPos].concat(pathOutcome)
    : null;

  memo[curPos[1]][curPos[0]] = pathOutcome;
  return pathOutcome;
}
