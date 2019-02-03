import LinkedList from '@utils/LinkedList';

export function isPalindrome(list: LinkedList<number>) {
  let head: typeof list['next'] = list;
  let totalLength = 0;

  function checkPalindromeRecursively(tail: typeof head) {
    if (tail === null) return true;
    totalLength++;
    const trueSoFar = checkPalindromeRecursively(tail.next);
    if (totalLength < 0) return true;
    if (!trueSoFar || head!.data !== tail.data) return false;
    totalLength += 2;
    head = head!.next;
    return true;
  }

  return checkPalindromeRecursively(head);
}
