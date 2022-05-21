/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument.
 The function should return an array containing all values of the nodes in the linked list.



  linked list values
  Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

  Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

  test_00:
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  // a -> b -> c -> d

  linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]


*/
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// a.next = b;
// b.next = c;
// c.next = d;

const linkedListValues = (head) => {
  let current = head;
  let arr = [];
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)
// recursive

const linkedListValues = (head) => {
  const values = [];
  _linkedListValues(head, values);
  return values;
};

const _linkedListValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  _linkedListValues(head.next, values);
};
