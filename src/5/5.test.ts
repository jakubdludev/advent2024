
import { expect, describe, it } from "bun:test";
import { getTestInput } from "../../getInput";
import { checkPageOrderingRules, checkSinglePageNumbersUpdate, getAnswerA, getAnswerB, isAbeforeBInArray, parseInput } from "./5";

const testInput = await getTestInput("4");

describe("Day 5 functions", () => {
  it("parseInput should parse input", () => {
    const expectedInput = {
      pageOrderingRules: [
        [47, 53],
        [97, 13],
        [97, 61],
        [97, 47],
        [75, 29],
        [61, 13],
        [75, 53],
        [29, 13],
        [97, 29],
        [53, 29],
        [61, 53],
        [97, 53],
        [61, 29],
        [47, 13],
        [75, 47],
        [97, 75],
        [47, 61],
        [75, 61],
        [47, 29],
        [75, 13],
        [53, 13],
      ],
      pageNumbersOfEachUpdate: [
        [75, 47, 61, 53, 29],
        [97, 61, 53, 29, 13],
        [75, 29, 13],
        [75, 97, 47, 61, 53],
        [61, 13, 29],
        [97, 13, 75, 29, 47],
      ],
    };
    const parsedInput = parseInput(testInput);
    expect(parsedInput).toEqual(expectedInput);
  });

  it("getAnswerA should return the answer for the first part", () => {
    const parsedInput = parseInput(testInput);
    expect(getAnswerA(parsedInput)).toEqual(143);
  });

  it("getAnswerB should return the answer for the second part", () => {
    const parsedInput = parseInput(testInput);

    expect(getAnswerB(parsedInput)).toEqual(0);
  });

  it("isAbeforeBInArray should return true if a is before b in the array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(isAbeforeBInArray(array, 1, 2)).toBe(true);
    expect(isAbeforeBInArray(array, 2, 1)).toBe(false);
    expect(isAbeforeBInArray(array, 3, 2)).toBe(false);
  });

  it("checkSinglePageNumbersUpdate should return true if the page ordering rules are satisfied", () => {
    const pageNumbersUpdate = [75, 47, 61, 53, 29];
    const pageOrderingRules = [
      [47, 53],
      [97, 13],
      [97, 61],
      [97, 47],
      [75, 29],
      [61, 13],
      [75, 53],
      [29, 13],
      [97, 29],
      [53, 29],
      [61, 53],
      [97, 53],
      [61, 29],
      [47, 13],
      [75, 47],
      [97, 75],
      [47, 61],
      [75, 61],
      [47, 29],
      [75, 13],
      [53, 13],
    ];
    expect(checkSinglePageNumbersUpdate(pageNumbersUpdate, pageOrderingRules)).toBe(true);
  });

  it("checkSinglePageNumbersUpdate should return false if the page ordering rules are not satisfied", () => {
    const parsedInput = parseInput(testInput);
    const page = parsedInput.pageNumbersOfEachUpdate[3];
    const rules = parsedInput.pageOrderingRules;

    expect(checkSinglePageNumbersUpdate(page, rules)).toBe(false);
  });

  it("checkPageOrderingRules should return true if the page ordering rules are satisfied", () => {
    const parsedInput = parseInput(testInput);
    expect(checkPageOrderingRules(parsedInput)).toEqual([
      true,
      true,
      true,
      false,
      false,
      false,
    ]);
  });
  
});
