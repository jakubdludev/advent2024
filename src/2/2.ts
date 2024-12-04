// Advent of Code 2024 - Day 2

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

export function levelsAreEitherDecreasingOrIncreasingAndAreGraduallyChanging(
    row: number[]
  ): boolean {
    return (
      levelsAreEitherDecreasingOrIncreasing(row) &&
      levelsAreGraduallyChanging(row, 3, 1)
    );
  }

export function tryToFixRow(row: number[]): number[] {
    if(levelsAreEitherDecreasingOrIncreasingAndAreGraduallyChanging(row)) {
        return row;
    }
    let fixedRow = row;

    for(let i = 0; i < row.length; i++) {
        const newRow = row.filter((_, index) => index !== i);
        if(levelsAreEitherDecreasingOrIncreasingAndAreGraduallyChanging(newRow)) {
            fixedRow = newRow;
            break;
        }
    }
    return fixedRow;
  }

export function getAnswerA(parsedInput: number[][]) {
    const result = parsedInput.map(levelsAreEitherDecreasingOrIncreasingAndAreGraduallyChanging)
    return result.filter((value) => value).length;
}


export function getAnswerB(parsedInput: number[][]): number {
    const dampened = parsedInput.map(tryToFixRow);
    const result = dampened.map(levelsAreEitherDecreasingOrIncreasingAndAreGraduallyChanging)
    return result.filter((value) => value).length;
}


export function getAnswer(inputRaw: string): Answer {
  const parsedInput = parseInput(inputRaw);
  
  return {
    a: getAnswerA(parsedInput),
    b: getAnswerB(parsedInput),
  };
}
