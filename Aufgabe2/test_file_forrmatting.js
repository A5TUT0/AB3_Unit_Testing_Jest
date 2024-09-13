const {
  getLastElement,
  lengthOfLongestWord,
  capitalizeWords,
  isPalindrome,
} = require(`./formatting`);

const array = ["hello", "how", "are", "you", "my", "lieadel", "friend"];
const text = "Arrow functions allow us to write shorter function syntax:";
const text2 = "hello";

console.log(getLastElement(array)); // expect: friend
console.log(lengthOfLongestWord(text)); // expect: 9
console.log(capitalizeWords(text2)); // expect: Hello
console.log(isPalindrome(text2)); // expect: It is not a palindrome
