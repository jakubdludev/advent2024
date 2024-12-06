// Advent of Code 2024 - Day 4

import type { Answer } from "../../types";

export function parseInput(inputRaw: string): string {
  return inputRaw
}

export function getColumns(rows:string[]){
  const columns = [];
  for (let i = 0; i < rows.length; i++) {
    let column = '';
    for (let j = 0; j < rows.length; j++) {
      column += rows[j][i];
    }
    columns.push(column);
  }
  return columns;
}

export function getTopLeftToBottomRightDiagonals(rows: string[]): string[] {
  const diagonals: string[] = [];

  for (let i = 0; i < rows.length; i++) {
    let diagonal = '';
    for (let j = 0; j < rows.length - i; j++) {
      diagonal += rows[j][i + j];
    }
    diagonals.push(diagonal);
  }

  for (let i = 1; i < rows.length; i++) {
    let diagonal = '';
    for (let j = 0; j < rows.length - i; j++) {
      diagonal += rows[i + j][j];
    }
    diagonals.push(diagonal);
  }

  return diagonals;
}

export function getBottomLeftToTopRightDiagonals(rows: string[]): string[] {
  const diagonals: string[] = [];

  for (let i = 0; i < rows[0].length; i++) {
    let diagonal = '';
    for (let j = 0; j + i < rows.length; j++) {
      diagonal += rows[rows.length - 1 - j][i + j];
    }
    diagonals.push(diagonal);
  }

  for (let i = 1; i < rows.length; i++) {
    let diagonal = '';
    for (let j = 0; j + i < rows.length; j++) {
      diagonal += rows[rows.length - 1 - i - j][j];
    }
    diagonals.push(diagonal);
  }

  return diagonals;
}

export function getAnswerA(parsedInput: string): number {
  const rows = parsedInput.split('\n');
  const reversedRows = rows.map(row => row.split('').reverse().join('')); 
  const columns = getColumns(rows);
  const reversedColumns = getColumns(rows).map(col => col.split('').reverse().join(''));
  const diagonals = getTopLeftToBottomRightDiagonals(rows).concat(getBottomLeftToTopRightDiagonals(rows));
  const reversedDiagonals = getTopLeftToBottomRightDiagonals(reversedRows).concat(getBottomLeftToTopRightDiagonals(reversedRows));

  const all = rows
    .concat(columns)
    .concat(diagonals)
    .concat(reversedDiagonals)
    .concat(reversedColumns)
    .concat(reversedRows);

  const XMASES = all.reduce((count, line) => {
    const matches = line.match(/XMAS/g); 
    return count + (matches ? matches.length : 0);
  }, 0);

  return XMASES;
}

export function splitInto3by3Boxes(grid: string[][]): string[][][] {
  const boxes = [];
  const numRows = grid.length;
  const numCols = grid[0].length;

  for (let i = 0; i <= numRows - 3; i++) {
    for (let j = 0; j <= numCols - 3; j++) {
      const box = [];
      for (let k = 0; k < 3; k++) {
        box.push(grid[i + k].slice(j, j + 3));
      }
      boxes.push(box);
    }
  }

  return boxes;
}

export function checkForMas(box: string[][]): boolean {
  const boxString = `${box[0][0]}${box[0][2]}${box[1][1]}${box[2][0]}${box[2][2]}`;
  const possibleStrings = ['MSAMS', 'SMASM', 'SSAMM', 'MMASS', 'MMASS'];
  
  return possibleStrings.some((str) => boxString.includes(str));
}

const prettyPrintBox = (box: string[][]) => {
  console.log('Box:');
  console.table(box);
}

export function getAnswerB(parsedInput: string): number {
  const boxes = splitInto3by3Boxes(parsedInput.split('\n').map(row => row.split('')));
  const X_MASES = boxes.filter(checkForMas).length;
  return X_MASES;
}

export function getAnswer(inputRaw: string): Answer {
  const parsedInput = parseInput(inputRaw);

  return {
    a: getAnswerA(parsedInput),
    b: getAnswerB(parsedInput),
  };
}
