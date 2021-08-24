/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let total = 0;

  for (let i = 0; i < height.length; i++) {
    const current = height[i];
    const maxL = maxBothSides(height, i, 1);
    const maxR = maxBothSides(height, i, 0);
    const smallerHeight = Math.min(maxL, maxR);
    const water = smallerHeight - current;

    if (water > 0) {
      total += water;
    }
  }

  return total;
};

//if mode = 1 left, else right
const maxBothSides = (arr, pointer, mode) => {
  let max = 0;
  if (mode) {
    for (let left = pointer - 1; left >= 0; left--) {
      max = Math.max(max, arr[left]);
    }
  } else {
    for (let right = pointer + 1; right < arr.length; right++) {
      max = Math.max(max, arr[right]);
    }
  }
  return max;
};
