import getRandomNumber from '../utils.js';
import { startGame } from '../index.js';

const arrOfOperators = ['-', '+', '*'];
const descr = 'What is the result of the expression?';

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
    default:
      break;
  }
  return result;
};

const calcGame = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const operator = arrOfOperators[getRandomNumber(0, 2)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = calc(firstOperand, operator, secondOperand);
  return [question, answer];
};

const start = () => startGame(calcGame, descr);

export default start;
