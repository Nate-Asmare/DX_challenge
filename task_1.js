const vowels = ["a", "e", "i", "o", "u"];

const longestWordInASentence = (sentence) => {
  sentence += " ";
  let longestWord = "";
  let longestWordVowels = 0;

  let word = "";
  let wordVowels = 0;

  for (let i = 0; i < sentence.length; i++) {
    //ignore any character not an english letter or a space
    const unicode = sentence[i].charCodeAt(0);

    if (
      (unicode >= 65 && unicode <= 90) ||
      (unicode >= 97 && unicode <= 122) ||
      unicode === 32
    ) {
      //compare current word with the longest word
      //if current word and longest word are equal choose based on highest number of vowels
      if (unicode === 32) {
        if (
          word.length > longestWord.length ||
          (word.length === longestWord.length && wordVowels > longestWordVowels)
        ) {
          longestWord = word;
          longestWordVowels = wordVowels;
        }

        word = "";
        wordVowels = 0;
        continue;
      }

      //count vowels
      if (vowels.includes(sentence[i].toLowerCase())) {
        wordVowels++;
      }
      //collect characters until a space is reached (word)
      word += sentence[i];
    }
  }

  return longestWord;
};

module.exports = longestWordInASentence;
