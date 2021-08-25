// "abc##" --> "a"
// "" "" --> true
//"acb#" "Acb#" --> false
/*
split into array
loop through both of the strings O(a + b) push elements into an answer array and pop them out if we see a hash and if the length is > 0
*/

var backspaceCompare = function (s, t) {
  s = s.split('');
  t = t.split('');
  let sTyped = [];
  let tTyped = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#' && s.length > 0) {
      sTyped.pop();
    } else {
      sTyped.push(s[i]);
    }
  }
  sTyped = sTyped.join('');

  for (let i = 0; i < t.length; i++) {
    if (t[i] === '#' && t.length > 0) {
      tTyped.pop();
    } else {
      tTyped.push(t[i]);
    }
  }
  tTyped = tTyped.join('');

  if (tTyped === sTyped) return true;
  else return false;
};
