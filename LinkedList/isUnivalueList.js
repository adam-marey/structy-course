/*
  is univalue list
  Write a function, isUnivalueList, that takes in the head of a linked list as an argument.
  The function should return a boolean indicating whether or not the linked list contains exactly one unique value.
  You may assume that the input list is non-empty.

  const a = new Node(7);
  const b = new Node(7);
  const c = new Node(7);

  a.next = b;
  b.next = c;

  // 7 -> 7 -> 7

  isUnivalueList(a); // true
  ----------------------------------------------

  const a = new Node(7);
  const b = new Node(7);
  const c = new Node(4);

  a.next = b;
  b.next = c;

  // 7 -> 7 -> 4

  isUnivalueList(a); // false
  
*/
// recursive solution

const isUnivalueList = (head, prevVal = null) => {
  if (head === null) return true;
  if (prevVal === null || prevVal === head.val) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
};

// n = number of nodes
// Time: O(n)
// Space: O(n)
//
