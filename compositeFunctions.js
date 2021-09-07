// * object structure of composite functions
// ? functions from leetcode problems
// TODO : define the function inside an object | import existing created functions

const reverseInteger = require("./ReverseInteger/reverseInteger");
const twoSums = require("./TwoSumProblem/twoSum");
const shift = require("./ArrayRotation/arrayRotation");
const { reverseWord, mirrorWords } = require("./ReverseWord/reverseWord");

let compose = {
  twoSumsProblem: twoSums,
  reverseIntegerProblem: reverseInteger,
  shift,
  reverseWord,
  mirrorWords,
};

console.log(compose.shift([1, 2, 3, 4, 5], 3));
console.log(compose.mirrorWords("Engineer"));
