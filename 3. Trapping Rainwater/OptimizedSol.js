//Time: O(n) Space: O(1)
//two shifting pointers technique

const trap = (height) => {
  let total = 0;
  let a = 0;
  let b = height.length - 1;
  let maxL = 0;
  let maxR = 0;

  while (a < b) {
    if (height[a] <= height[b]) {
      if (height[a] < maxL) {
        const water = maxL - height[a];
        total += water;
      } else {
        maxL = height[a];
      }
      a++;
    } else {
      if (height[b] < maxR) {
        const water = maxR - height[b];
        total += water;
      } else {
        maxR = height[b];
      }
      b--;
    }
  }
  return total;
};
