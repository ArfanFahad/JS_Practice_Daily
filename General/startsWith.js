const words = ["apple", "banana", "apricot", "cherry", "avocado"];

for (let i = 0; i <= words.length - 1; i++) {
  const filtering = words[i];
  // const startA = words[i].startsWith("a");
  // const startB = words[i].startsWith("b");
  // const startC = words[i].startsWith("c");

  if (words[i].startsWith("a")) {
    console.log(words[i]);
  }
}
