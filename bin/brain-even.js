#!/usr/bin/env node
import readlineSync from 'readline-sync';
import isEvenGame from '../src/even.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise asnwer "no".');
console.log(isEvenGame(userName));