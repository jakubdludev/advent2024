// Advent of Code 2024 - Day

import type { Answer } from "../../types";

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

export function getAnswerA(inputRaw: string) {
  const parsedInput = parseInput(inputRaw);
  const levelsAreEitherDecreasingOrIncreasingResult = parsedInput.map((row) =>
    levelsAreEitherDecreasingOrIncreasing(row)
  );
  const levelsAreGraduallyChangingResult = parsedInput.map((row) =>
    levelsAreGraduallyChanging(row, 3, 1)
  );

  const processedInput = levelsAreEitherDecreasingOrIncreasingResult.map(
    (value, index) => {
      return value && levelsAreGraduallyChangingResult[index];
    }
  );

  return processedInput.filter((value) => value).length;
}

export function getAnswer(inputRaw: string): Answer {
  return {
    a: getAnswerA(inputRaw),
    b: 5,
  };
}
