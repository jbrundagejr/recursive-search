function recursiveSearch(arr, target) {
  // return false if given an empty array
  if(arr.length === 0) return false
  // compare first element of array to target. Return true if they are the same
  if(arr[0] === target) return true
  // if target doesn't match, remove the first element of the array
  arr.shift()
  // go through the process again
  return recursiveSearch(arr, target)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
