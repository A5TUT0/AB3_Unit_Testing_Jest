const {
  uniqueValues,
  letterFrequency,
  sortByKey,
  deepClone,
  intersection,
  divide,
} = require("./extended_formatting");

describe("uniqueValues", () => {
  test("returns an array with unique values", () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(uniqueValues(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns an empty array when input is an empty array", () => {
    expect(uniqueValues([])).toEqual([]);
  });
});

describe("letterFrequency", () => {
  test("returns frequency of each letter in a word", () => {
    const word = "hello";
    expect(letterFrequency(word)).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  test("handles an empty string", () => {
    expect(letterFrequency("")).toEqual({});
  });
});

describe("sortByKey", () => {
  test("sorts an array of objects by a specified key", () => {
    const arr = [
      { name: "Luis", age: 25 },
      { name: "Ana", age: 30 },
      { name: "Carlos", age: 22 },
    ];
    expect(sortByKey(arr, "age")).toEqual([
      { name: "Carlos", age: 22 },
      { name: "Luis", age: 25 },
      { name: "Ana", age: 30 },
    ]);
  });

  test("sorts an array of objects by a string key", () => {
    const arr = [
      { name: "Luis", age: 25 },
      { name: "Ana", age: 30 },
      { name: "Carlos", age: 22 },
    ];
    expect(sortByKey(arr, "name")).toEqual([
      { name: "Ana", age: 30 },
      { name: "Carlos", age: 22 },
      { name: "Luis", age: 25 },
    ]);
  });
  test("returns 0 when values are equal", () => {
    const arr = [
      { name: "Luis", age: 25 },
      { name: "Ana", age: 25 },
      { name: "Carlos", age: 22 },
    ];
    expect(sortByKey(arr, "age")).toEqual([
      { name: "Carlos", age: 22 },
      { name: "Luis", age: 25 },
      { name: "Ana", age: 25 },
    ]);
  });
});

describe("deepClone", () => {
  test("creates a deep clone of an object", () => {
    const original = { name: "Luis", address: { city: "Berlin" } };
    const clone = deepClone(original);
    clone.address.city = "Munich";
    expect(original.address.city).toBe("Berlin");
  });

  test("creates a deep clone of an array", () => {
    const original = [1, 2, { a: 3 }];
    const clone = deepClone(original);
    clone[2].a = 4;
    expect(original[2].a).toBe(3);
  });
});

describe("intersection", () => {
  test("returns an array of elements common to both input arrays", () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    expect(intersection(arr1, arr2)).toEqual([3, 4]);
  });

  test("returns an empty array when no elements are common", () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(intersection(arr1, arr2)).toEqual([]);
  });
});
describe("divide", () => {
  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws error when dividing by 0", () => {
    expect(() => divide(10, 0)).toThrow("Invalid divisor");
  });
});
