import readlineSync from 'readline-sync';
import {
  greeting, numberOfGames, getRandomNumber, getRandElement,
} from '../src/index.js';

const progression = (numberOfElements) => {
  const result = [];
  for (let num = getRandomNumber(), i = 0, step = getRandomNumber(10) + 1;
    i < numberOfElements;
    i += 1, num += step) {
    result.push(num);
  }
  return result;
};

const numberOfElements = 10;

const progressionGame = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < numberOfGames; i += 1) {
    const numbersArr = progression(numberOfElements);
    const rightAnswer = getRandElement(numbersArr);
    const indexOfElement = numbersArr.indexOf(rightAnswer);
    numbersArr[indexOfElement] = '..';
    console.log(`Question: ${numbersArr.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer.toString() !== userAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default progressionGame;
