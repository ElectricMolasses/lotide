const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let result={};
  for(var str in itemsToCount){
    let count = 0;
    for(var letter of allItems){
      if(letter===str && itemsToCount[str]){
        count++;
      }
    }
    if (count === 0){
      count = undefined;
    }
    result[str] = count;
  }
  return result;
}   



module.exports = countOnly;