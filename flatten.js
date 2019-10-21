const flatten = function(array) {
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattened.push(...flatten(array[i]));
    } else {
      flattened.push(array[i]);
    }
  }

  return flattened;
};

module.exports = flatten;