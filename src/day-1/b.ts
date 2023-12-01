import { readData } from '../utils';
import chalk from 'chalk';

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);

  let calibrationNumberSum = 0;

  const stringToDigitMap: Map<string, number> = new Map(Object.entries({
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  }));

  for(const line of data) {
    for(const entry in stringToDigitMap) {

    }

    // const firstDigit = numbersInLine.slice(0,1);
    // const lastDigit = numbersInLine.slice(numbersInLine.length - 1);
    // const joinedNumber = firstDigit + lastDigit

    // calibrationNumberSum += Number.parseInt(joinedNumber);
  }

  return calibrationNumberSum;
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day1b().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
