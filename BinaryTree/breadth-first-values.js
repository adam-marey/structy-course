/*
Write a function, breadthFirstValues, that takes in the root of a binary tree.
The function should return an array containing all values of the tree in breadth-first order.

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']

*/
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.shift();
    result.push(current.val);

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};
// n = number of nodes
// Time: O(n)
// Space: O(n)
