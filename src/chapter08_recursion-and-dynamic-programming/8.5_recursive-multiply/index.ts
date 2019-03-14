// tslint:disable:no-bitwise

export function simpleRecursiveMultiply(a: number, b: number): number {
  if (b === 0) return 0;
  if (b === 1) return a;
  return a + simpleRecursiveMultiply(a, b - 1);
}

function gridDivideRecursiveMultiplyHelper(
  smaller: number,
  bigger: number,
): number {
  if (smaller === 0) return 0;
  if (smaller === 1) return bigger;

  const s = smaller >> 1;
  const half = gridDivideRecursiveMultiplyHelper(s, bigger);
  return 2 * half + (smaller % 2 === 0 ? 0 : bigger);
}

export function gridDivideRecursiveMultiply(a: number, b: number) {
  const smaller = Math.min(b, a);
  const bigger = Math.max(a, b);
  return gridDivideRecursiveMultiplyHelper(smaller, bigger);
}
