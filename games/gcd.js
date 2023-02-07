import readlineSync from 'readline-sync';
import { greeting, getRandomNumber, numberOfGames } from '../src/index.js';

const getGCD = (a, b) => {
  if (b > a) {
    return getGCD(b, a);
  }
  if (a % b === 0) {
    return b;
  }
  const c = a % b;
  return getGCD(b, c);
};

const gcdGame = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < numberOfGames; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = getGCD(firstNumber, secondNumber).toString();
    if (rightAnswer !== userAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default gcdGame;
