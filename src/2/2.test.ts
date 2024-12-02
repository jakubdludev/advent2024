import { expect, describe, it } from "bun:test";
import { getTestInput } from "../../getInput";
import {
  getAnswerA,
  getAnswerB,
  levelsAreEitherDecreasingOrIncreasing,
  levelsAreEitherDecreasingOrIncreasingAndAreGraduallyChanging,
  levelsAreGraduallyChanging,
  parseInput,
  tryToFixRow,
} from "./2";
const testInput = await getTestInput("2");

describe("Day 2 functions", () => {
  it("parseInput should parse input (each row is a list of levels", () => {
    const expectedParsedInput = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ];

    const parsedInput = parseInput(testInput);
    expect(parsedInput).toEqual(expectedParsedInput);
  });

  it("levelsAreEitherDecreasingOrIncreasing should return true if levels in a row are either decreasing or increasing", () => {
    const expectedResult = [true, true, true, false, false, true];
    const parsedInput = parseInput(testInput);
    const result = parsedInput.map((row) =>
      levelsAreEitherDecreasingOrIncreasing(row)
    );
    expect(result).toEqual(expectedResult);
  });

  it("levelsAreGraduallyChanging should return true if levels are gradually stepped with specified criteria", () => {
    const expectedResult = [true, false, false, true, false, true];
    const parsedInput = parseInput(testInput);
    const result = parsedInput.map((row) =>
      levelsAreGraduallyChanging(row, 3, 1)
    );
    expect(result).toEqual(expectedResult);
  });

  it("levelsAreEitherDecreasingOrIncreasingAndAreGraduallyChanging should return true if levels are either decreasing or increasing and gradually stepped", () => {
    const expectedResult = [true, false, false, false, false, true];
    const parsedInput = parseInput(testInput);
    const result = parsedInput.map(
      levelsAreEitherDecreasingOrIncreasingAndAreGraduallyChanging
    );
    expect(result).toEqual(expectedResult);
  });

  it("getAnswerA should return the answer for the first part", () => {
    const parsedInput = parseInput(testInput);
    expect(getAnswerA(parsedInput)).toEqual(2);
  });

  it("tryToFixRow should return the row if it is already correct", () => {
    const row = [1, 2, 3, 4, 5];
    expect(tryToFixRow(row)).toEqual(row);
  });

  it("tryToFixRow should return fixed row if possible", () => {
    const row = [1, 2, 2, 3, 4, 5];
    expect(tryToFixRow(row)).toEqual([1, 2, 3, 4, 5]);
  });

  it("tryToFixRow should return the same row if not possible to fix", () => {
    const row = [1, 2, 2, 2, 3, 4, 5];
    expect(tryToFixRow(row)).toEqual([1, 2, 2, 2, 3, 4, 5]);
  });

  it("getAnswerB should return the answer for the second part", () => {
    const parsedInput = parseInput(testInput);
    expect(getAnswerB(parsedInput)).toEqual(4);
  });
});
