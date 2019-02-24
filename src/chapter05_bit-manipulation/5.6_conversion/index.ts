export function howManyFlipsWithMath(a: number, b: number) {
  let xor = a ^ b;
  let bitCount = 0;
  while (xor !== 0) {
    xor -= 2 ** Math.floor(Math.log2(xor));
    bitCount++;
  }
  return bitCount;
}

export function howManyFlipsWithShift(a: number, b: number) {
  let bitCount = 0;
  for (let c = a ^ b; c !== 0; c = c >>> 1) bitCount += c & 1;
  return bitCount;
}

export function howManyFlipsWithMask(a: number, b: number) {
  let bitCount = 0;
  for (let c = a ^ b; c !== 0; c = c & (c - 1)) bitCount++;
  return bitCount;
}
