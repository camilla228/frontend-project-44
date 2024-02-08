#!/usr/bin/env node
import gameBody from '../src/index.js';

const description = 'What is the result of the expression?';

const task = () => {
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  const operator = ['+', '-', '*'];
  const indexOper = Math.floor(Math.random() * 2);

  let answer = '';

  switch(indexOper) {
    case 0:
      answer = `${firstNum + secondNum}`;
      break;
    case 1:
      answer = `${firstNum - secondNum}`;
      break;
    default:
      answer = `${firstNum * secondNum}`;
      break;
  }

  return [`${firstNum} ${operator[indexOper]} ${secondNum}`, answer]; //аналог [question, answer]
};

gameBody(description, task);
