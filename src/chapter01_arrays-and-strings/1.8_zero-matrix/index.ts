export function setZeros(matrix: number[][]) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const zeroMarkedRows = Array(rows).fill(false);
  const zeroMarkedCols = Array(cols).fill(false);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        zeroMarkedRows[row] = true;
        zeroMarkedCols[col] = true;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    if (zeroMarkedRows[row]) matrix[row].fill(0);
  }

  for (let col = 0; col < cols; col++) {
    if (zeroMarkedCols[col]) {
      for (let row = 0; row < cols; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
}
