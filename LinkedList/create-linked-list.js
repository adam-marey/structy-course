/*
create linked list
Write a function, createLinkedList, that takes in an array of values as an argument.
The function should create a linked list containing each element of the array as the values of the nodes.
The function should return the head of the linked list.

createLinkedList(["h", "e", "y"]);
// h -> e -> y

createLinkedList([1, 7, 1, 8]);
// 1 -> 7 -> 1 -> 8

createLinkedList([]);
// null
*/

// iterative:
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  const dummyhead = new Node(null);
  let tail = dummyhead;
  for (let val of values) {
    tail.next = new Node(val);
    tail = tail.next;
  }
  return dummyhead.next;
};

// n = length of values
// Time: O(n)
// Space: O(n)
// ------------------------------------------------------
// recursive

const createLinkedList = (values, i = 0) => {
  if (i === values.length) return null;
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head;
};

// n = length of values
// Time: O(n)
// Space: O(n)
