#!/usr/bin/env node
import gameBody from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = () => {
  const num = Math.floor(Math.random() * 100);

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }
  return [num, 'yes'];
};

gameBody(description, task);
