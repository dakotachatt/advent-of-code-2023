import { readData } from '../utils';
import chalk from 'chalk';

type PullResult = {
  number: number;
  color: string;
}

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);
  let gamesPossibleSum = 0;
  const maxNumRed = 12;
  const maxNumGreen = 13;
  const maxNumBlue = 14;

  for(let i = 0; i < data.length; i++) {
    const trimmedLine = data[i].trim();
    const gameResults = trimmedLine.slice(data[i].indexOf(':') + 1);
    const allPulls = gameResults.split(/[;,]+/)
    let isGamePossible = true;

    for(let j = 0; j < allPulls.length; j++) {
      const result = allPulls[j].trim().split(' ');

      if(result[1] === 'red' && Number.parseInt(result[0]) > maxNumRed) {
        isGamePossible = false;

        break;
      } else if (result[1] === 'green' && Number.parseInt(result[0]) > maxNumGreen) {
        isGamePossible = false;

        break;
      } else if (result[1] === 'blue' && Number.parseInt(result[0]) > maxNumBlue) {
        isGamePossible = false;

        break;
      }
    }

    if(isGamePossible) {
      gamesPossibleSum += (i + 1);
    }
  }

  return gamesPossibleSum;
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day2a().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
