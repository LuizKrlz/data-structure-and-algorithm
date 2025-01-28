// leetcode 387

const firstUniqCharInString = (s) => {
  const occurences = {};

  for (let i = 0; i < s.length; i++) {
    if (!occurences[s[i]]) {
      occurences[s[i]] = 1;
    } else {
      occurences[s[i]] += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (occurences[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

const a = firstUniqCharInString("leetcode");

console.log(a);
