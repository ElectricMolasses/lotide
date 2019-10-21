const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

let testArray = [5, 4, 3, 2, 1];
let newArray = tail(testArray); 

module.exports = tail;