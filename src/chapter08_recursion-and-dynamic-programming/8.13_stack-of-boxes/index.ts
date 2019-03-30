import Box from './Box';

const canBeAbove = (b1: Box, b2: Box) =>
  b2.w > b1.w && b2.h > b1.h && b2.d > b1.d;

function _simpleRecursiveSolution(boxes: Box[]): number {
  switch (boxes.length) {
    case 0:
      return 0;
    case 1:
      return boxes[0].h;
    default:
      return boxes.reduce(
        (maxHeight, box) =>
          Math.max(
            maxHeight,
            _simpleRecursiveSolution(
              boxes.filter(b => b !== box && canBeAbove(b, box)),
            ) + box.h,
          ),
        0,
      );
  }
}

export function simpleRecursiveSolution(boxes: Box[]) {
  return _simpleRecursiveSolution(boxes.sort((a, b) => a.h - b.h));
}
