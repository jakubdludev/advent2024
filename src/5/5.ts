// Advent of Code 2024 - Day 5

import type { Answer } from "../../types";

export interface Input {
  pageOrderingRules: number[][];
  pageNumbersOfEachUpdate: number[][];
}

export function parseInput(inputRaw: string): Input  {
  const lines = inputRaw.split("\n");
  const lastPageOrderingRulesLine = lines.findIndex((line) => line === "");
  const pageOrderingRules = lines.slice(0, lastPageOrderingRulesLine).map((line) => line.split("|")).map(line=>line.map((number)=>parseInt(number)));
  const pageNumbersOfEachUpdate = lines.slice(lastPageOrderingRulesLine+1).map((line) => line.split(",")).map((line) => line.map((number) => parseInt(number)));  

  
  return {
    pageOrderingRules,
    pageNumbersOfEachUpdate
  }
}

export function findRelevantRules(printingSection: number[], allRules: number[][]): number[][] {
  return allRules.filter((rule) => {
    // console.log(rule);
    // console.log(printingSection);
    // console.log('-----');
    const relevant =  rule.every((pageNumber) => printingSection.includes(pageNumber));

    console.log(relevant);
  });    
}


export function getAnswerA(parsedInput: Input): number {
  findRelevantRules(parsedInput.pageNumbersOfEachUpdate[0], parsedInput.pageOrderingRules);

  return 0;
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
