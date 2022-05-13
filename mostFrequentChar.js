// most frequent char
/*
Write a function, mostFrequentChar, that takes in a string as an argument.
 The function should return the most frequent character of the string.
  If there are ties, return the character that appears earlier in the string.
  You can assume that the input string is non-empty.



  mostFrequentChar('bookeeper'); // -> 'e'
  mostFrequentChar('david'); // -> 'd'
  mostFrequentChar('abby'); // -> 'b'
  mostFrequentChar('mississippi'); // -> 'i'

*/

const mostFrequentChar = (string) => {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char > 0) {
      total += char;
    }
    char++;
  }
  return total;
};

// n = length of string
// Time: O(n)
// Space: O(n)
