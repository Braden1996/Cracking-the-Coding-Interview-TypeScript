import LinkedList from '@utils/LinkedList';

function getLength<T>(node: LinkedList<T> | null) {
  let count = 0;
  while (node !== null) {
    count++;
    node = node.next;
  }
  return count;
}

export function getIntersection<T>(
  a: LinkedList<T> | null,
  b: LinkedList<T> | null,
) {
  const aLength = getLength(a);
  const bLength = getLength(b);
  const lengthDiff = aLength - bLength;

  for (let i = 0; i < lengthDiff; i++) a = a!.next;
  for (let i = lengthDiff; i < 0; i++) b = b!.next;

  while (a !== b) {
    a = a!.next;
    b = b!.next;
  }

  return a;
}
