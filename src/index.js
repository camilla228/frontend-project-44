import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const gameBody = (description, taskFunc) => {
  const userName = greeting(); // приветствие
  console.log(description); // правила игры

  let mark = 0;
  for (let i = 1; i <= 3; i += 1) {
    const step = taskFunc();

    console.log(`Question: ${step[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === step[1]) {
      console.log('Correct!');
      mark += 1;
    } else {
      console.log(`"${userAnswer}' is wrong answer ;(. Correct answer was '${step[1]}'.\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (mark === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameBody;
