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

console.log(countOnly(["1", "1", "2", "3"], { "1": true, "3": true}));

module.exports = countOnly;