import readlineSync from 'readline-sync';
import { greeting, getRandomNumber, numberOfGames } from '../src/index.js';

function getRandOperator(arrOfOperators) {
    const rand = Math.floor(Math.random() * arrOfOperators.length);
    return arrOfOperators[rand];
};

const arrOfOperators = ['-', '+', '*'];

const calcGame = () => {
    const userName = greeting();
    console.log('What is the result of the expression?');
    for (let i = 0; i < numberOfGames; i += 1) {
        const firstOperand = getRandomNumber();
        const secondOperand = getRandomNumber();
        const operator = getRandOperator(arrOfOperators);
        console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
        const userAnswer = readlineSync.question('Your answer: ');
        let rightAnswer;
        switch (operator) {
            case '-':
                rightAnswer = firstOperand - secondOperand;
                break;
            case '+':
                rightAnswer = firstOperand + secondOperand;
                break;
            case '*':
                rightAnswer = firstOperand * secondOperand;
                break;
        };
        if (rightAnswer != userAnswer) {
            return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
        }
        console.log('Correct!');
    }
    return `Congratulations, ${userName}!`;
};

export default calcGame;