import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const descr = 'What number is missing in the progression?';
const numberOfElements = 10;

const progression = (elements) => {
  const result = [];
  for (let num = getRandomNumber(1, 10), i = 0, step = getRandomNumber(1, 10) + 1;
    i < elements;
    i += 1, num += step) {
    result.push(num);
  }
  return result;
};

const progressionGame = () => {
  const numbersArr = progression(numberOfElements);
  const indexOfElement = getRandomNumber(0, numberOfElements - 1);
  const answer = numbersArr[indexOfElement];
  numbersArr[indexOfElement] = '..';
  /* const answer = numbersArr[getRandomNumber(0, numberOfElements - 1)];
  const indexOfElement = numbersArr.indexOf(answer);
  numbersArr[indexOfElement] = '..'; */
  const question = `${numbersArr.join(' ')}`;
  return [question, answer];
};

const start = () => startGame(progressionGame, descr);

export default start;
