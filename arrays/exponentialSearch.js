// Exponential search
// O(log n)
// O(1)

const binarySearch = (elements, target, lower = 0, upper = 0) => {
  while (lower < upper) {
    let middle = Math.floor((lower + upper) / 2);

    if (elements[middle] === target) {
      return middle;
    } else if (elements[middle] < target) {
      lower = middle + 1;
    } else {
      upper = middle - 1;
    }
  }

  return -1;
};

const exponentialSearch = (elements, target) => {
  if (elements[0] === target) return 0;

  let n = elements.length;
  let i = 1;

  while (i < n && elements[i] < target) {
    i *= 2;
  }

  if (elements[i] === target) return i;

  return binarySearch(elements, target, i / 2, Math.min(i, n - 1));
};

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];
const target = 32;
const result = exponentialSearch(arr, target);

console.log(result);
