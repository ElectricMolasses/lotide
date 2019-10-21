const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let counts = {};

  for (let i = 0; i < allItems.length; i++) {
    if (itemsToCount[allItems[i]]) {
      counts[allItems[i]] = (0 | counts[allItems[i]]);
      counts[allItems[i]]++;
    }
  }

  return counts;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames,
  { "Jason": true,
    "Karima": true,
    "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = assertEqual;