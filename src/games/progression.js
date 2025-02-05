import mainEngine from '../index.js';
import getRandomNumber from '../random.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const missingNumber = (progression) => {
  const newProgression = [...progression];
  const index = getRandomNumber(0, newProgression.length - 1);
  const missing = newProgression[index];
  newProgression[index] = '..';
  return { newProgression, missing };
};

const getData = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = getProgression(start, step, length);
  const { newProgression, missing } = missingNumber(progression);
  const question = newProgression.join(' ');
  const correctAnswer = String(missing);
  return [question, correctAnswer];
};

const startProgression = () => mainEngine(getData, description);

export default startProgression;
