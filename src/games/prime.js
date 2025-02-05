import mainEngine from '../index.js';
import getRandomNumber from '../random.js';

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const getData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startPrime = () => mainEngine(getData, description);

export default startPrime;
