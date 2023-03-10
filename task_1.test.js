const longestWordInASentence = require("./task_1");

test("Choose the longest string", () => {
  const sentence =
    "Smart people learn from Unbelievable everything and everyone, average people from their experience, stupid people already, have all the answers";

  const response = longestWordInASentence(sentence);

  expect(response).toBe("Unbelievable");
});

test("Same length string (choose by number of vowels)", () => {
  const sentence =
    "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

  const response = longestWordInASentence(sentence);

  expect(response).toBe("experience");
});

test("String with non english characters", () => {
  const sentence =
    "Smart people learn from everything and everyone, average people from their experi**ence, stupid people already, have all the answers";

  const response = longestWordInASentence(sentence);

  expect(response).toBe("experience");
});

test("Handle sentences with multiple spaces correctly", () => {
  const sentence =
    "Smart people    learn from everything and everyone,   average people from  their experi**ence,   stupid people already, have all the answers";

  const response = longestWordInASentence(sentence);

  expect(response).toBe("experience");
});

test("Return an empty string if the input sentence is empty", () => {
  const sentence = "";

  const response = longestWordInASentence(sentence);

  expect(response).toBe("");
});

test("Handle uppercase and lowercase letters correctly", () => {
  const sentence =
    "Smart people learn from everything and everyone, average people from their EXPERIENce, stupid people already, have all the answers";

  const response = longestWordInASentence(sentence);

  expect(response).toBe("EXPERIENce");
});
