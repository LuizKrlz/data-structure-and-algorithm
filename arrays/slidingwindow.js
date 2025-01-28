// Sliding window
// O(n)

const maximumLengthSubString = (text) => {
  let leftPointer = 0;
  let rightPointer = 0;
  let _max = 0;

  const counter = {};

  counter[text[0]] = 1;

  while (rightPointer < text.length - 1) {
    rightPointer++;
    if (counter[text[rightPointer]]) {
      counter[text[rightPointer]]++;
    } else {
      counter[text[rightPointer]] = 1;
    }

    while (counter[text[rightPointer]] === 3) {
      counter[text[leftPointer]]--;

      leftPointer++;
    }

    _max = Math.max(_max, rightPointer - leftPointer + 1);
  }

  return _max;
};

console.log(maximumLengthSubString("aabacbebebe"));
