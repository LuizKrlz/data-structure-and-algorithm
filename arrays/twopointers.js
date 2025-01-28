// reverse string with two pointers

var reverseString = (text) => {
  const chars = text.split("");

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("").split(" ").reverse().join(" ");
};

console.log(reverseString("hello world"));
