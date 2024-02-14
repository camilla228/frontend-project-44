#!/usr/bin/env node
import gameBody from '../src/index.js';

const description = 'What number is missing in the progression?';

const task = () => {
  const arrayLength = Math.floor(Math.random() * 5) + 5; // случайная длина массива
  const progressDelta = Math.round(Math.random() * 10); // шаг прогрессии
  const firstNum = Math.round(Math.random() * 100); // начальное число прогрессии
  const progression = [];
  progression.push(firstNum);
  for (let i = 1; i < arrayLength; i += 1) {
    progression.push(progression[i - 1] + progressDelta); // наполняем массив прогрессии
  }
  const emptyIndex = Math.floor(Math.random() * arrayLength); // индекс числа, которое мы выкинем
  const answer = `${progression[emptyIndex]}`;
  progression[emptyIndex] = '..';

  return [progression.join(' '), answer];
};

gameBody(description, task);
