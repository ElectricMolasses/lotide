const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence.charAt(i)] === undefined) {
      results[sentence.charAt(i)] = [];
    }
    results[sentence.charAt(i)].push(i);
  }

  return results;
};

module.exports = letterPositions;