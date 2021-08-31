//Time O(n) Space O(N)
//cleaner solution

const parens = {
  '(': ')',
  '[': ']',
  '{': '}',
};

var isValid = function (s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const rightBracket = parens[leftBracket];
      if (s[i] !== rightBracket) return false;
    }
  }
  return stack.length === 0;
};

//a bit dirty - ish solution
var isValid = function (s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
      if (stack.length === 0) return false;
      else {
        const leftBracket = stack.pop();
        const rightBracket = s[i];
        switch (leftBracket) {
          case '(':
            if (rightBracket !== ')') return false;
            break;
          case '[':
            if (rightBracket !== ']') return false;
            break;
          case '{':
            if (rightBracket !== '}') return false;
            break;
        }
      }
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length === 0) return true;
  else return false;
};
