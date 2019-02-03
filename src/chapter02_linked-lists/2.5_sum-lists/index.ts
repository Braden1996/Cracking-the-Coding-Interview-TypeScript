import LinkedList from '@utils/LinkedList';

export function recursiveSum(
  a: LinkedList<number> | null,
  b: LinkedList<number> | null,
  carry = 0,
) {
  const sum = (a ? a.data : 0) + (b ? b.data : 0) + carry;
  carry = Math.floor(sum / 10);
  const remainder = sum - carry * 10;
  const c = new LinkedList(remainder);
  if (carry > 0 || (a && a.next) || (b && b.next)) {
    c.next = recursiveSum(a ? a.next : null, b ? b.next : null, carry);
  }
  return c;
}
