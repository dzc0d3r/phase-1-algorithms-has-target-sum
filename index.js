function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) {
        return true; // If a pair is found
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  
  Time complexity looks like a solid O(n^2)
  because of the nested second iteration using j < array.length
  so it's O(n^2 - 1) => O(n^2) and space complexity is O(1) 
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
