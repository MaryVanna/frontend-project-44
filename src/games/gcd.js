import getRandomNumber from '../utils.js';
import { startGame } from '../index.js';

const descr = 'Find the greatest common divisor of given numbers.';

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
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber);
  return [question, answer];
};

const start = () => startGame(gcdGame, descr);

export default start;
