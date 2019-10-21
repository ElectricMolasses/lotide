const without = function(arr, filters) {
  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < filters.length; j++) {
      if (newArr[i] === filters[j]) {
        newArr.splice(i, 1);
        i--;
        break;
      }
    }
  }

  return newArr;
};

module.exports = without;