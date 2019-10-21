const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let str in itemsToCount) {
    let count = 0;
    for (const letter of allItems) {
      if (letter === str && itemsToCount[str]) {
        count++;
      }
    }
    if (count === 0) {
      count = undefined;
    }
    result[str] = count;
  }
  return result;
};

console.log(countOnly(["1", "1", "2", "3"], { "1": true, "3": true}));

module.exports = countOnly;