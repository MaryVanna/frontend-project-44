import readlineSync from 'readline-sync';
import { greeting, getRandomNumber, numberOfGames } from '../src/index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isEvenGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberOfGames; i += 1) {
    const guessedNumber = getRandomNumber();
    console.log(`Question: ${guessedNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(guessedNumber);
    if (userAnswer.toLowerCase() !== rightAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default isEvenGame;
