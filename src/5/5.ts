// Advent of Code 2024 - Day 5

import type { Answer } from "../../types";

export interface Input {
    pageOrderingRules: number[][];
    pageNumbersOfEachUpdate: number[][];
}

export function parseInput(inputRaw: string): Input {
    const lines = inputRaw.split("\n");
    const lastPageOrderingRulesLine = lines.findIndex((line) => line === "");
    const pageOrderingRules = lines
        .slice(0, lastPageOrderingRulesLine)
        .map((line) => line.split("|"))
        .map((line) => line.map((number) => parseInt(number)));
    const pageNumbersOfEachUpdate = lines
        .slice(lastPageOrderingRulesLine + 1)
        .map((line) => line.split(","))
        .map((line) => line.map((number) => parseInt(number)));

    return {
        pageOrderingRules,
        pageNumbersOfEachUpdate,
    };
}

export function isAbeforeBInArray(array: number[], a: number, b: number): boolean {
    if (array.indexOf(a) === -1 || array.indexOf(b) === -1) {
        return true;
    }
    const indexA = array.indexOf(a);
    const indexB = array.indexOf(b);
    return indexA < indexB;
};

export function checkPageOrderingRules(parsedInput: Input): boolean[] {
  const answer = parsedInput.pageNumbersOfEachUpdate.map(
    (pageNumbersOfEachUpdate) => {
      let isCorrect = true;
        pageNumbersOfEachUpdate.forEach((pageNumber, index) => {
          parsedInput.pageOrderingRules.forEach((pageOrderingRule) => {
            if(pageNumbersOfEachUpdate.slice(index).includes(pageOrderingRule[0]) && pageNumbersOfEachUpdate.includes(pageOrderingRule[1])) {
              if(!isAbeforeBInArray(pageNumbersOfEachUpdate, pageNumber, pageOrderingRule[1])) {
                isCorrect = false;
              }
            }
          });
        });
        return isCorrect;
    });

    return answer;
}

export function checkSinglePageNumbersUpdate(pageNumbersUpdate: number[], pageOrderingRules: number[][]): boolean {
  let isCorrect = true;
    pageNumbersUpdate.forEach((pageNumber, index) => {
      pageOrderingRules.forEach((pageOrderingRule) => {
        if(pageNumbersUpdate.slice(index).includes(pageOrderingRule[0]) && pageNumbersUpdate.includes(pageOrderingRule[1])) {
          if(!isAbeforeBInArray(pageNumbersUpdate, pageNumber, pageOrderingRule[1])) {
            isCorrect = false;
          }
        }
      });
    });
    return isCorrect;
}



export function getAnswerA(parsedInput: Input): number {
    const onlyValidPages = parsedInput.pageNumbersOfEachUpdate.filter((pageNumbersUpdate) => checkSinglePageNumbersUpdate(pageNumbersUpdate, parsedInput.pageOrderingRules));
    const middleValuesFromValidPages = onlyValidPages.map((pageNumbersUpdate) => pageNumbersUpdate[Math.floor(pageNumbersUpdate.length / 2)]);
    return middleValuesFromValidPages.reduce((a, b) => a + b, 0);
}

export function getAnswerB(parsedInput: Input): number {
    return 0;
}

export function getAnswer(inputRaw: string): Answer {
    const parsedInput = parseInput(inputRaw);

    return {
        a: getAnswerA(parsedInput),
        b: getAnswerB(parsedInput),
    };
}
