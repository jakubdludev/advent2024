// Advent of Code 2024 - Day 2

import type { Answer } from "../../types";

export function parseInput(inputRaw: string): string {
  return inputRaw;
}

export function extractValidMulOperations(input: string): string[] | null {
  const regex = /mul\((\d+),(\d+)\)/g;
  const validMuls = input.match(regex);
  return validMuls;
}

function mul(args: number[]): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}

function add(args: number[]): number {
  return args.reduce((acc, curr) => acc + curr, 0);
}

function div(args: number[]): number {
  return args.reduce((acc, curr) => acc / curr, 1);
}

function sub(args: number[]): number {
  return args.reduce((acc, curr) => acc - curr, 0);
}

export function processOperations(operations: string[]): number[] {
  return operations.map((operation) => {
    const args = operation.match(/\d+/g)!.map(Number);
    const operator = operation.match(/mul|add|div|sub/)![0];
    switch (operator) {
      case "mul":
        return mul(args);
      case "add":
        return add(args);
      case "div":
        return div(args);
      case "sub":
        return sub(args);
      default:
        return 0;
    }
  });
}

export function removeDontedInput(input: string): string{
  let processed = input
  while(processed.includes("don't()")){
    const dont = processed.indexOf("don't()");
    const afterDont = processed.slice(dont);
    const start = afterDont.indexOf("do()");
    const stringToRemove = afterDont.slice(0, start);
    processed = processed.replace(stringToRemove, "");
  }

  return processed
}


export function getAnswerA(parsedInput: string):number {
  const validMulOperations = extractValidMulOperations(parsedInput)!;
  const result = processOperations(validMulOperations);
  return result.reduce((acc, curr) => acc + curr, 0);
}


export function getAnswerB(parsedInput: string): number {
  const processedDonts = removeDontedInput(parsedInput);
  const validMulOperations = extractValidMulOperations(processedDonts)!;
  const result = processOperations(validMulOperations);
  return result.reduce((acc, curr) => acc + curr, 0);
}


export function getAnswer(inputRaw: string): Answer {
  const parsedInput = parseInput(inputRaw);
  
  return {
    a: getAnswerA(parsedInput),
    b: getAnswerB(parsedInput),
  };
}
