const {
  uniqueValues,
  letterFrequency,
  sortByKey,
  deepClone,
  intersection,
} = require("./extended_formatting");

const array = [
  "hello",
  "how",
  "are",
  "you",
  "my",
  "lieadel",
  "friend",
  "how",
  "are",
];
const text = "Arrow functions allow us to write shorter function syntax:";
const text2 = "hello";
const countrys = [
  {
    name: "Swizerland",
    poblation: 10000000,
  },
  {
    name: "USA",
    poblation: 199999999999,
  },
  {
    name: "Spain",
    poblation: 10,
  },
];
const moneyLogo = {
  Euro: "€",
  Dolar: "$",
  Paunt: "£",
};
const clone = deepClone(moneyLogo);

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

clone.Euro = "¢";
console.log(uniqueValues(array));
console.log(letterFrequency(text2));
console.log(sortByKey(countrys, countrys.poblation));
console.log(clone);
console.log(intersection(array1, array2));
