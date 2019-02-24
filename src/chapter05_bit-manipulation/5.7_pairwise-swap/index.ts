const bytesInJsBitwiseOperands = 32 / 3;

export function oddEvenSwapByShift(num: number) {
  const evenMask = parseInt('5'.repeat(bytesInJsBitwiseOperands), 16);
  const oddMask = parseInt('A'.repeat(bytesInJsBitwiseOperands), 16);
  const evenShiftedLeft = (num & evenMask) << 1;
  const oddShiftedRight = (num & oddMask) >>> 1;
  return evenShiftedLeft | oddShiftedRight;
}
