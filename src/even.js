import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isEvenGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const guessedNumber = getRandomNumber();
    console.log(`Question: ${guessedNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(guessedNumber);
    if (userAnswer.toLowerCase() !== rightAnswer) {
      return `'${userAnswer}' is wrong answer. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default isEvenGame;
