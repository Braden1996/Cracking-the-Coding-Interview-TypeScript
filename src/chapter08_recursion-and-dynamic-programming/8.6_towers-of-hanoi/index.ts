import Stack from '@utils/Stack';

function popDisksFromTower<T>(source: Stack<T>, destination: Stack<T>) {
  while (!source.isEmpty()) destination.push(source.pop()!);
}

export function moveDiskRecursive<T>(
  source: Stack<T>,
  buffer: Stack<T>,
  destination: Stack<T>,
) {
  popDisksFromTower(source, buffer);
  popDisksFromTower(buffer, destination);
}
