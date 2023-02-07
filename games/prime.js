import readlineSync from 'readline-sync';
import { greeting, numberOfGames, getRandomNumber } from '../src/index.js';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < numberOfGames; i += 1) {
    const guessedNumber = getRandomNumber();
    console.log(`Question: ${guessedNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = isPrime(guessedNumber);
    if (userAnswer.toLowerCase() !== rightAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default primeGame;
