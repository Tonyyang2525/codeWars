// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    if (args.length === 0) {
      return;
    } else {
      //this is a built method that returns the lowest number between each element.
      return Math.min(...args);
    }
  }
}
