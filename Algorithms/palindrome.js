/* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and 
turn everything into the same case (lower or upper case) in order to check for palindromes. */

function palindrome(str) {
    let potentialPalindrome = str
      .replace(/\s|[^a-zA-Z0-9]/g,'')
      .toLowerCase();
    let stringEnd = potentialPalindrome.length - 1;
    let isPalindrome = true;
    for (let i = 0; i <= Math.floor(potentialPalindrome.length); i++) {
      if (potentialPalindrome.charAt(i) !== potentialPalindrome.charAt(stringEnd - i)) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
}
