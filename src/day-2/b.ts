import { readData } from '../utils';
import chalk from 'chalk';

type ResultObject = {
  color: string,
  numberOfCubes: number
}

export async function day2b(dataPath?: string) {
  const data = await readData(dataPath);
  let powersSum = 0;

  for(let i = 0; i < data.length; i++) {
    const trimmedLine = data[i].trim();
    const gameResults = trimmedLine.slice(data[i].indexOf(':') + 1);
    const allPulls = gameResults.split(/[;,]+/)
    const resultObjectArray: ResultObject[] = [];

    for(let j = 0; j < allPulls.length; j++) {
      const result = allPulls[j].trim().split(' ');
      console.log('Hand:', result);

      resultObjectArray.push({
        color: result[1],
        numberOfCubes: Number.parseInt(result[0])
      });
    }

    const redCubes = Math.max(...resultObjectArray.filter((entry) => entry.color === 'red').map(entry => entry.numberOfCubes));
    const greenCubes = Math.max(...resultObjectArray.filter((entry) => entry.color === 'green').map(entry => entry.numberOfCubes));
    const blueCubes = Math.max(...resultObjectArray.filter((entry) => entry.color === 'blue').map(entry => entry.numberOfCubes));

    powersSum += redCubes * greenCubes * blueCubes;
  }

  return powersSum;
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day2b().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
