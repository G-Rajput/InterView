const str = "Amolya Sharma";
str.toLocaleLowerCase;

// const strArray = str.split(" ");

// strArray.map((strItem, index) => {
//   console.log(strItem.split(""));
// });

function countChar(str) {
  let strLower = str.toLocaleLowerCase().split(" ").join("");
  console.log(strLower);
  const charCount = {};

  for (const char of strLower) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  //   const sortedChars = Object.keys(charCount).sort();
  //   console.log(sortedChars);
  for (let char in charCount) {
    console.log(`${char.toUpperCase()} - ${charCount[char]}`);
  }
}

const Example1 = "Amolya Sharma";
const Example2 = "Chinmay Kulkarni";

countChar(Example2);
