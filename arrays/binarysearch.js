// binary search

// itens needs to be sorted
// O(log n)
// O(1)

const binarySearch = (elements, target) => {
  let lower = 0;
  let upper = elements.length - 1;

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

const a = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);

console.log(a);
