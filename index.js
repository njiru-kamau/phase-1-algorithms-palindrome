function isPalindrome(word) {
  // Write your algorithm here

  var str = str.toLowerCase();
  var str = str.replace(/[^a-z]/g, '');
  var str = str.split('');
  var str = str.reverse();
  var str = str.join('');
  if (str === str) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
//a Palindrome takes a string as input.

create a variable  that is equal to an empty string.

To iterate over the input string in reverse order, use a loop. Add one character to the beginning of the "reversedString" variable for each character in the input string.

After the loop has finished, check to see if the "reversedString" variable equals the input string. Return "true" if the input string is a palindrome. Return "false" if it is not a palindrome.


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
