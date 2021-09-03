/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  quickSort(nums, 0, nums.length - 1);
  return nums[nums.length - k];
};

const quickSort = function (arr, left, right) {
  if (left < right) {
    const partitionIdx = partition(arr, left, right);

    quickSort(arr, left, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, right);
  }
};

const partition = function (arr, left, right) {
  const pivot = arr[right];
  let partitionIdx = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(arr, partitionIdx, right);

  return partitionIdx;
};

const swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
