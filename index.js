function isPalindrome(word) {
  // Write your algorithm here

  const strArr = str.split("")
  const strReversedArr = str.split("").reverse()
  let a = 0;
  for (let i in strReversedArr) {
    if (strReversedArr[i] === strArr[i]) {
      a++
    }
  }
  if (a === strArr.length) {
    return true
  }
  else {
    return false
  }
}

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
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
