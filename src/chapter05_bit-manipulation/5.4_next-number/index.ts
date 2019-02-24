const bitsInJavaScriptNumber = 64;

function findLarger(num: number) {
  let c = num;
  let c0 = 0;
  let c1 = 0;

  while ((c & 1) === 0 && c !== 0) {
    c0++;
    c >>= 1;
  }

  while ((c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  if (c0 + c1 === bitsInJavaScriptNumber / 2 - 1 || c0 + c1 === 0) {
    throw new Error('No larger number can be made with the same number of 1s.');
  }

  const p = c0 + c1;

  num |= 1 << p;
  num &= ~((1 << p) - 1);
  num |= (1 << (c1 - 1)) - 1;

  return num;
}

function findSmaller(num: number) {
  let c = num;
  let c0 = 0;
  let c1 = 0;

  while ((c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  if (c === 0) {
    throw new Error('No larger number can be made with the same number of 1s.');
  }

  while ((c & 1) === 0 && c !== 0) {
    c0++;
    c >>= 1;
  }

  const p = c0 + c1;

  num &= ~0 << (p + 1);

  const mask = (1 << (c1 + 1)) - 1;
  num |= mask << (c0 - 1);

  return num;
}

export const flipRightmost = {
  larger: findLarger,
  smaller: findSmaller,
};
