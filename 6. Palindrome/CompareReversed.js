/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  const reversed = s.split('').reverse().join('');

  return s === reversed;
};

//or
const string = 'A man, a plan, a canal: Panama';

const isValidPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let rev = '';

  // generate a reverse string using a reverse for loop.
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev === s;
};

console.log(isValidPalindrome(string));
