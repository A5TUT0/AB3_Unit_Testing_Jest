function uniqueValues(arr) {
  return [...new Set(arr)];
}

function letterFrequency(word) {
  const frequency = {};

  for (const letter of word) {
    if (frequency[letter]) {
      frequency[letter] += 1;
    } else {
      frequency[letter] = 1;
    }
  }

  return frequency;
}
function sortByKey(arr, key) {
  return arr.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function intersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}
function divide(a, b) {
  if (b === 0 || typeof b !== "number") {
    throw new Error("Invalid divisor");
  }
  return a / b;
}
module.exports = {
  uniqueValues,
  letterFrequency,
  sortByKey,
  deepClone,
  intersection,
  divide,
};
