//cleaner solution
//Time : O(n) Space: O(n)
var minRemoveToMakeValid = function (str) {
  const res = str.split('');
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop();
    } else if (res[i] === ')') {
      res[i] = '';
    }
  }

  while (stack.length) {
    const curIdx = stack.pop();
    res[curIdx] = '';
  }

  return res.join('');
};

var minRemoveToMakeValid = function (s) {
  const stack = [];
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length > 0) stack.pop();
      else {
        s.splice(i, 1);
        i--;
      }
    }
  }
  if (stack.length > 0) {
    for (let i = stack.length - 1; i >= 0; i--) {
      s.splice(stack[i], 1);
      stack.pop();
    }
  }

  return s.join('');
};
