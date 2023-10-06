

/* function isPalindrome(word) {
  // Write your algorithm here
  const isPalindrome = true;

  if(word === 'madam' || word === 'abba' || word === 'car' ){
    console.log(isPalindrome)
  }
  else(
    console.log(!isPalindrome)
  )
}
isPalindrome('a') */

/* 
  Add your pseudocode here
//expect this function to receive one argument chich is a string
//make a function for reversing the word
//if the reversed word is the same as the input then return true if else return false
*/

function reversedString(word){
  //spliit the word to check if it is the same foward and backwards
  const wordArray = word.split("");
  //reverse the array
  const reversedWordArray = wordArray.reverse();
  //create sometheing frm reversed array
  const reversedWord = reversedWordArray.join("");
  //return reverse word
  return reversedWord;
}

function isPalindrome(word){
  const reversedWord = reversedString(word)

  //if reversed string is same as input then return respective values
  if(word === reversedWord){
    return true;
  }
  else{
    return false;
  }

}
console.log(isPalindrome('add'))

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log(""); //space inbetween losg

  console.log("Expecting true");
  console.log("=>", isPalindrome("mom"))
  console.log("");

  console.log("Expecting true");
  console.log("=>", isPalindrome("abba"))
  console.log("");

  console.log("Expacting false");
  console.log("=>", isPalindrome('a'))
  console.log("");

  console.log("Expacting false");
  console.log("=>", isPalindrome('hi'))
  console.log("");


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome; 
