export function binaryToString(realNumber: number) {
  // Check given assumptions
  if (realNumber <= 0 || realNumber >= 1) {
    throw new Error(`Number ${realNumber} is not in the range 0-1.`);
  }

  let binaryFraction = '';
  let chipAwayNumber = realNumber;
  while (chipAwayNumber > 0) {
    if (binaryFraction.length > 32) return 'ERROR';

    const shiftBinaryLeft = chipAwayNumber * 2;
    binaryFraction += shiftBinaryLeft >= 1 ? '1' : '0';
    chipAwayNumber = shiftBinaryLeft - (shiftBinaryLeft >= 1 ? 1 : 0);
  }

  return binaryFraction;
}
