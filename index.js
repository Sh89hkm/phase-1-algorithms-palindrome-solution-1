/* 
  Add your pseudocode here

  solution 1
  reverse the input string
  if the reversed string is the same as the input
  return true
  else
  return false

  create an array from the input string
  reverse the array
  create a string from the reversed array
  return the reversed string
  
*/

/*
  Add written explanation of your solution here
*/

/* solution 1 long
function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
*/

// solution 1 short
function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  

  console.log("Expecting: ih");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: tobor");
  console.log("=>", reverseString("robot"));

  console.log("");

  console.log("Expecting: mom");
  console.log("=>", reverseString("mom"));


}

module.exports = isPalindrome;
