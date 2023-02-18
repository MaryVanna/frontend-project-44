import { getRandomNumber, isPrime } from '../utils.js';
import { startGame } from '../index.js';

const descr = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const start = () => startGame(primeGame, descr);

export default start;
