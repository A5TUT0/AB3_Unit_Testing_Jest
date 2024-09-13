const getLastElement = (array) => array.at(-1);

function isPalindrome(str) {
  // quelle: https://www.programiz.com/javascript/examples/palindrome
  // find the length of a string
  const replace = str.replaceAll(" ", "");
  const len = replace.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (replace[i] !== replace[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const capitalizeWords = (str) => str[0].toUpperCase() + str.slice(1);

function lengthOfLongestWord(str) {
  // quellen: https://stackoverflow.com/questions/44663705/getting-an-array-with-lengths-of-words-from-a-sentence-javascript
  // trim trailing white space.
  const split = str.trim().split(/\s+/);
  const lengths = [];

  // loop through array of words
  for (j = 0; j < split.length; j++) {
    // check the length of current words
    const wordCount = split[j].length;
    lengths.push(wordCount);
  }

  return Math.max(...lengths);
}

module.exports = {
  getLastElement,
  lengthOfLongestWord,
  capitalizeWords,
  isPalindrome,
};
