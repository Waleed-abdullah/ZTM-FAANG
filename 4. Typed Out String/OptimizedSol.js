// "abc##" --> "a"
// "" "" --> true
//"acb#" "Acb#" --> false
/*
split into array
loop through both of the strings O(a + b) push elements into an answer array and pop them out if we see a hash and if the length is > 0
*/
//Optimized the space complexity from O(a + b) to O(1) and time is still O(a +b)
var backspaceCompare = function (s, t) {
  let a = s.length - 1;
  let b = t.length - 1;

  while (a >= 0 || b >= 0) {
    if (s[a] === '#' || t[b] === '#') {
      if (s[a] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          a--;
          backCount--;
          if (s[a] === '#') {
            backCount += 2;
          }
        }
      }

      if (t[b] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          b--;
          backCount--;
          if (t[b] === '#') {
            backCount += 2;
          }
        }
      }
    } else {
      if (s[a] !== t[b]) {
        return false;
      } else {
        a--;
        b--;
      }
    }
  }
  return true;
};
