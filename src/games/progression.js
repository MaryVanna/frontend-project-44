import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const descr = 'What number is missing in the progression?';
const numberOfElements = 10;

const progression = (elements) => {
  const result = [];
  let num = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  for (let i = 0; i < elements; i += 1) {
    result.push(num);
    num += step;
  }
  return result;
};

const progressionGame = () => {
  const numbersArr = progression(numberOfElements);
  const indexOfElement = getRandomNumber(0, numberOfElements - 1);
  const answer = numbersArr[indexOfElement];
  numbersArr[indexOfElement] = '..';
  const question = `${numbersArr.join(' ')}`;
  return [question, answer];
};

const start = () => startGame(progressionGame, descr);

export default start;
