#!/usr/bin/env node
import gameBody from '../src/index.js';

// const userName = greeting();

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const task = () => {
  const question = Math.floor(Math.random() * 100);
  // let answer = question % 2 // вернет 1 - если нечет, вернет 0 - если чет
  let answer = '';
  if (question % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return [question, answer];
};

gameBody(description, task);
