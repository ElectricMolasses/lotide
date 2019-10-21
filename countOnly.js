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



module.exports = assertEqual;