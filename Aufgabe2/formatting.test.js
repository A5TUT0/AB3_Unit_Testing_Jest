const {
  getLastElement,
  lengthOfLongestWord,
  capitalizeWords,
  isPalindrome,
} = require(`./formatting`);

test("take a list and return the last element", () => {
  const list = ["hello", "how", "are", "you", "my", "lieadel", "friend"];
  expect(getLastElement(list)).toBe("friend");
});
test("returns the length of the longest word", () => {
  const text = "Arrow functions allow us to write shorter function syntax:";
  expect(lengthOfLongestWord(text)).toBe(9);
});
test("Make that the first letter of the word be capital", () => {
  expect(capitalizeWords("test")).toBe("Test");
});
test("Check if this is a palindrome word", () => {
  expect(isPalindrome("level")).toBe("It is a palindrome");
});
test("Check if this is a palindrome word", () => {
  expect(isPalindrome("asdf")).toBe("It is not a palindrome");
});
