const getLastElement = (array) => array.at(-1);

function isPalindrome(string) {
  // quelle: https://www.programiz.com/javascript/examples/palindrome
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

const capitalizeWords = (string) => string[0].toUpperCase() + string.slice(1);

function lengthOfLongestWord(str) {
  // quellen: https://stackoverflow.com/questions/44663705/getting-an-array-with-lengths-of-words-from-a-sentence-javascript
  // trim trailing white space.
  var split = str.trim().split(/\s+/);
  var lengths = [];

  // loop through array of words
  for (j = 0; j < split.length; j++) {
    // check the length of current words
    var wordCount = split[j].length;
    lengths.push(wordCount);
  }

  return Math.max(...lengths);
}
