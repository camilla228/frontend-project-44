#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

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

let mark = 0;
for (let i = 1; i <= 3; i += 1 ) {
    const step = task(); // [question, answer]

    console.log(`Question: ${step[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === step[1]) {
        console.log('Correct!')
        mark += 1;
    } else {
        console.log(`"${userAnswer}' is wrong answer ;(. Correct answer was '${step[1]}'.\nLet's try again, ${userName}!`);
        break;
    }
}

if (mark === 3) {
    console.log(`Congratulations, ${userName}!`);
}
