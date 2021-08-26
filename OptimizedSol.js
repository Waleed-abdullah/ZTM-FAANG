//using Map Class
const lengthOfLongestSubstring = (s) => {
  if (s.length < 2) return s.length;

  const seenChars = new Map();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChars.get(currentChar);

    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }

    seenChars.set(currentChar, right);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

//Cleaner Solution O(n) , O(n)
const lengthOfLongestSubstring = (s) => {
  if (s.length < 2) return s.length;

  const seenChars = {};
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChars[currentChar];

    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }

    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

//Time O(n) Space O(n)
const lengthOfLongestSubstring2 = function (s) {
  if (s.length <= 1) return s.length;

  const seenChars = {};
  let longest = 0;
  let left = 0;
  let right = left;
  let tempLongest = 0;

  while (right < s.length) {
    const currentRight = s[right];
    if (seenChars[currentRight] === undefined) {
      seenChars[currentRight] = right;
      tempLongest = right - left + 1;
      longest = Math.max(longest, tempLongest);
      right++;
    } else {
      if (seenChars[currentRight] >= left) {
        left = seenChars[currentRight] + 1;
        seenChars[currentRight] = right;
        right++;
      } else {
        seenChars[currentRight] = right;
        tempLongest = right - left + 1;
        longest = Math.max(longest, tempLongest);
        right++;
      }
    }
  }

  return longest;
};
