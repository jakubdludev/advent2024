import { expect, describe, it } from "bun:test";
import { getTestInput } from "../../getInput";
import { getAnswerA, getAnswerB, parseInput } from "./5";

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
});
