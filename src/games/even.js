import { getRandomNumber, isEven } from '../utils.js';
import { startGame } from '../index.js';

const descr = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const start = () => startGame(isEvenGame, descr);

export default start;
