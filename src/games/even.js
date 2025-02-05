import mainEngine from '../index.js';
import getRandomNumber from '../random.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEven = () => mainEngine(getData, description);

export default startEven;
