#!/usr/bin/env node
import gameBody from '../src/index.js';

const description = 'What number is missing in the progression?';

const task = () => {
  const arraylength = Math.floor(Math.random() * 5) + 5; // случайная длина массива
  const progressDelta = Math.round(Math.random() * 10); // шаг прогрессии
  const firstNum = Math.round(Math.random() * 100); // начальное число в прогрессии
  const progression = [];
  progression.push(firstNum);
  for (let i = 1; i < arraylength; i += 1) {
    progression.push(progression[i - 1] + progressDelta); // наполняем массив прогрессии
  }
  
};

task();
