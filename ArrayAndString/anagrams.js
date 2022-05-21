// anagrams //
/*
Write a function, anagrams, that takes in two strings as arguments.
 The function should return a boolean indicating whether or not the strings are anagrams.
 Anagrams are strings that contain the same characters, but in any order.




  anagrams('restful', 'fluster'); // -> true
  anagrams('cats', 'tocs'); // -> false
  anagrams('monkeyswrite', 'newyorktimes'); // -> true
  anagrams('paper', 'reapa'); // -> false
  anagrams('elbow', 'below'); // -> true
*/
const anagrams = (string1, string2) => {
  const count = {};
  for (let char of string1) {
    if (!(char in count)) count[char] = 0;
    count[char] += 1;
  }

  for (let char of string2) {
    if (count[char] === undefined) return false;
    count[char] -= 1;
  }

  for (let char in count) {
    if (count[char] !== 0) return false;
  }
  return true;
};

// n = length of string 1
// m = length of string 2
// Time: O(n + m)
// Space: O(n)
