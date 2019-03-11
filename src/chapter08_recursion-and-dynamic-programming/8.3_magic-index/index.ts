export function getPathToBottomRight(
  sortedArray: number[],
  start = 0,
  end = sortedArray.length - 1,
): number | null {
  const mid = Math.floor((start + end) / 2);
  if (sortedArray[mid] === mid) return mid;
  if (start >= end) return null;
  return sortedArray[mid] < mid
    ? getPathToBottomRight(sortedArray, mid + 1, end)
    : getPathToBottomRight(sortedArray, start, mid - 1);
}
