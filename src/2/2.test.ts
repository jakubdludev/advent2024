import { expect, describe, it, test } from "bun:test";
import { getTestInput } from "../../getInput";
import {
    getAnswerA,
  levelsAreEitherDecreasingOrIncreasing,
  levelsAreGraduallyChanging,
  parseInput,
} from "./2";
const testInput = await getTestInput("2");

describe("Day 2", () => {
  it("should parse input (each row is a list of levels", () => {
    const expectedParsedInput = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ];

    parseInput(testInput);
    expect(parseInput(testInput)).toEqual(expectedParsedInput);
  });

  it("should return true if levels in a row are either decreasing or increasing", () => {
    const parsedInput = parseInput(testInput);
    const expectedResult = [true, true, true, false, false, true];
    const result = parsedInput.map((row) =>
      levelsAreEitherDecreasingOrIncreasing(row)
    );
    expect(result).toEqual(expectedResult);
  });

  it("should return true if levels are gradually stepped", () => {
    const parsedInput = parseInput(testInput);
    const expectedResult = [true, false, false, true, false, true];
    const result = parsedInput.map((row) =>
      levelsAreGraduallyChanging(row, 3, 1)
    );
    expect(result).toEqual(expectedResult);
  });

  it("should return the answer for first part", () => {
    getAnswerA(testInput);
    expect(getAnswerA(testInput)).toEqual(2);
  });
});
