#!/usr/bin/env node
import gameBody from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const task = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a >= b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = `${a + b}`;

  return [`${num1} ${num2}`, answer];
};

gameBody(description, task);
