import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const numberOfGames = 3;

export const getRandomNumber = (depth = 100) => Math.round(Math.random() * depth);

export function getRandElement(arrOfElements) {
  const rand = Math.floor(Math.random() * arrOfElements.length);
  return arrOfElements[rand];
}
