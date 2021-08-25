// "abc##" --> "a"
// "" "" --> true
//"acb#" "Acb#" --> false
/*
split into array
loop through both of the strings O(a + b) push elements into an answer array and pop them out if we see a hash and if the length is > 0
*/

var backspaceCompare = function (s, t) {
  s = typeBackspace(s);
  t = typeBackspace(t);

  if (s === t) return true;
  else return false;
};

const typeBackspace = (string) => {
  string = string.split('');
  const arr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '#') {
      arr.pop();
    } else {
      arr.push(string[i]);
    }
  }
  return arr.join('');
};
