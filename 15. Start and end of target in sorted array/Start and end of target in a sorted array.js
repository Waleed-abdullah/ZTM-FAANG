//Time Complexity O(logn) Space O(1)
var searchRange = function (nums, target) {
  if (nums.length < 1) return [-1, -1];
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  if (firstPos === -1) return [-1, -1];

  let endPos = firstPos,
    startPos = firstPos,
    tempL,
    tempR;

  while (startPos !== -1) {
    tempL = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }

  startPos = tempL;

  while (endPos !== -1) {
    tempR = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = tempR;

  return [startPos, endPos];
};

const binarySearch = (nums, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = nums[mid];

    if (foundVal === target) return mid;
    else if (foundVal < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
