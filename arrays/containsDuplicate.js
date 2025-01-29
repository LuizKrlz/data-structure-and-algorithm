var containsDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const lastIndex = map.get(nums[i]);

      if (Math.abs(lastIndex - 1) <= k) {
        return true;
      }
    }

    map.set(nums[i], 1);
  }

  return false;
};

const a = containsDuplicate([1, 2, 3, 1], 3);

console.log(a);
