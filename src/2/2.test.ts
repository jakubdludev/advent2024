import { expect, describe, it } from "bun:test";
import { getTestInput } from "../../getInput";
import { parseInput } from "./2";
const testInput = await getTestInput("2");

const expectedParsedInput = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

describe("Day 2", () => {
  it("should parse input (each row is a list of levels", () => {
    parseInput(testInput);
    expect(parseInput(testInput)).toEqual(expectedParsedInput);
  });
});
