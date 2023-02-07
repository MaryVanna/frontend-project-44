import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, numberOfGames, getRandElement,
} from '../src/index.js';

const arrOfOperators = ['-', '+', '*'];

const calc = (firstOperand, operator, secondOperand) => {
  let result;
    switch (operator) {
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
    }
  return result;
};

const calcGame = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  for (let i = 0; i < numberOfGames; i += 1) {
    const firstOperand = getRandomNumber();
    const secondOperand = getRandomNumber();
    const operator = getRandElement(arrOfOperators);
    console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = calc(firstOperand, operator, secondOperand);
    if (rightAnswer != userAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default calcGame;
