const bitsInJavaScriptNumber = 64;

export function flipBitToWin(num: number) {
  let preZeroLength = 0;
  let postZeroLength = 0;
  let haveSeenZero = false;
  let longestFound = 0;

  for (let i = 0; i < bitsInJavaScriptNumber; i++) {
    const curBit = (num & (1 << i)) !== 0;
    if (curBit) {
      haveSeenZero ? postZeroLength++ : preZeroLength++;
      longestFound = Math.max(longestFound, preZeroLength + postZeroLength);
    } else {
      if (haveSeenZero) {
        [preZeroLength, postZeroLength] = [postZeroLength, 0];
      } else {
        haveSeenZero = true;
      }
      preZeroLength++; // Increment for now flipped 0
    }
  }

  return longestFound;
}
