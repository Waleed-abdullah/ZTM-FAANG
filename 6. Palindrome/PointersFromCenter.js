/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  const middle = Math.floor(s.length / 2);

  let left = middle;
  let right = middle;

  if (s.length % 2 === 0) left--;

  while (right < s.length && left >= 0) {
    if (s[left] !== s[right]) return false;

    left--;
    right++;
  }
  return true;
};
