const longestWordInASentence = (sentence) => {
  const words = sentence.replace(/[^a-zA-Z ]/g, "").split(" ");

  let longestWord = "";
  let numVowels = 0;

  for (let word of words) {
    const vowels = word.match(/[aeiou]/gi);
    const numWordVowels = vowels ? vowels.length : 0;

    if (
      word.length > longestWord.length ||
      (word.length === longestWord.length && numWordVowels > numVowels)
    ) {
      longestWord = word;
      numVowels = numWordVowels;
    }
  }

  return longestWord;
};

module.exports = longestWordInASentence;
