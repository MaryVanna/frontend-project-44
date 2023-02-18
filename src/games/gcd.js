import { getRandomNumber, getGCD } from '../utils.js';
import { startGame } from '../index.js';

const descr = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber);
  return [question, answer];
};

const start = () => startGame(gcdGame, descr);

export default start;
