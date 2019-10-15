const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let counts = {};
  let lowercase = string.toLowerCase();

  for (let i = 0; i < lowercase.length; i++) {
    counts[lowercase.charAt(i)] = (0 | counts[lowercase.charAt(i)]);
    counts[lowercase.charAt(i)]++;
  }

  return counts;
};

let count = countLetters("These are in fact letters.");

assertEqual(count.t, 4);
assertEqual(count.a, 2);
assertEqual(count.l, 1);