// Advent of Code 2024 - Day

export function parseInput(inputRaw: string): number[][] {
  return inputRaw.split("\n").map((row) => {
    return row.split(" ").map((level) => parseInt(level));
  });
}

export function levelsAreEitherDecreasingOrIncreasing(row: number[]): boolean {
  let levelsAreDecreasing = true;
  let levelsAreIncreasing = true;

  for (let i = 0; i < row.length; i++) {
    if (row[i] <= row[i + 1]) {
      levelsAreDecreasing = false;
      break;
    }
  }

  for (let i = 0; i < row.length; i++) {
    if (row[i] >= row[i + 1]) {
      levelsAreIncreasing = false;
      break;
    }
  }

  return levelsAreDecreasing || levelsAreIncreasing;
}

export function levelsAreGraduallyChanging(
  row: number[],
  maxDifference: number,
  minDistance: number
): boolean {
  let levelsAreGraduallyIncreasing = true;

  for (let i = 0; i < row.length; i++) {
    if (
      Math.abs(row[i] - row[i + 1]) > maxDifference ||
      Math.abs(row[i] - row[i + 1]) < minDistance
    ) {
      levelsAreGraduallyIncreasing = false;
    }
  }

  return levelsAreGraduallyIncreasing;
}

export function getAnswer(inputRaw: string) {}
