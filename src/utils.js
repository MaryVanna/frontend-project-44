export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const calc = (firstOperand, operator, secondOperand) => {
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

export const getGCD = (a, b) => {
  if (b > a) {
    return getGCD(b, a);
  }
  if (a % b === 0) {
    return b;
  }
  const c = a % b;
  return getGCD(b, c);
};

export const progression = (numberOfElements) => {
  const result = [];
  for (let num = getRandomNumber(1, 10), i = 0, step = getRandomNumber(1, 10) + 1;
    i < numberOfElements;
    i += 1, num += step) {
    result.push(num);
  }
  return result;
};
