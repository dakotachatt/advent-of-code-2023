import { readData } from '../utils';
import chalk from 'chalk';

export async function day1a(dataPath?: string) {
  const data = await readData(dataPath);

  let calibrationNumberSum = 0;

  for(const line of data) {
    const numbersInLine = line.match(/\d+/g).join('');

    const firstDigit = numbersInLine.slice(0,1);
    const lastDigit = numbersInLine.slice(numbersInLine.length - 1);
    const joinedNumber = firstDigit + lastDigit

    calibrationNumberSum += Number.parseInt(joinedNumber);
  }

  return calibrationNumberSum;
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day1a().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
