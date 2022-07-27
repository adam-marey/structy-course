/*
Write a function, treeSum, that takes in the root of a binary tree that contains number values.
The function should return the total sum of all values in the tree.

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); // -> 21
*/



// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// depth first
const treeSum = (root) => {
  if (root === null) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
};
// n = number of nodes
// Time: O(n)
// Space: O(n)

// breadth first
const treeSum = (root, target) => {
  if (root === null) return 0;

  const queue = [root];
  let totalSum = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    totalSum += node.val;
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return totalSum;
};
n = number of nodes
Time: O(n)
Space: O(n)