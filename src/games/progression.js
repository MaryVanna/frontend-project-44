import { progression, getRandomNumber } from '../utils.js';
import { startGame } from '../index.js';

const descr = 'What number is missing in the progression?';
const numberOfElements = 10;

const progressionGame = () => {
  const numbersArr = progression(numberOfElements);
  const answer = numbersArr[getRandomNumber(0, numberOfElements - 1)];
  const indexOfElement = numbersArr.indexOf(answer);
  numbersArr[indexOfElement] = '..';
  const question = `${numbersArr.join(' ')}`;
  return [question, answer];
};

const start = () => startGame(progressionGame, descr);

export default start;
