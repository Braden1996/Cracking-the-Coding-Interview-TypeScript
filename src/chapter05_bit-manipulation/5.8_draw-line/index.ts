export function drawLine(
  screen: Uint8Array,
  width: number,
  x1: number,
  x2: number,
  y: number,
) {
  const firstByte = (width / 8) * y + Math.floor(x1 / 8);
  const lastByte = (width / 8) * y + Math.floor(x2 / 8);

  for (let byte = firstByte + 1; byte < lastByte; byte++) screen[byte] = 0xff;

  const i = x1 % 8;
  const j = x2 % 8;

  const firstMask = 0xff >> i;
  const lastMask = ~(0xff >> (j + 1));

  if (firstByte === lastByte) {
    const firstLastMask = firstMask & lastMask;
    screen[firstByte] = screen[firstByte] | (0xff & firstLastMask);
  } else {
    screen[firstByte] = i === 0 ? 0xff : screen[firstByte] | (0xff & firstMask);
    screen[lastByte] = j === 0 ? 0xff : screen[lastByte] | (0xff & lastMask);
  }

  return screen;
}
