import { words } from './WordList.js';

const getRandomWord = () => {
  let index = Math.floor(Math.random() * words.length);
  let randomWord = words[index];
  return randomWord;
};

export { getRandomWord };
