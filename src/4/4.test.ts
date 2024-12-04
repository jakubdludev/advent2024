import { expect, describe, it } from "bun:test";
import { getTestInput } from "../../getInput";
import {
  getAnswerA,
  getAnswerB,
  getBottomLeftToTopRightDiagonals,
  getColumns,
  getTopLeftToBottomRightDiagonals,
  parseInput,
} from "./4";

const testInput = await getTestInput("4");

describe("Day 4 functions", () => {
  it("parseInput should parse input",  () => {

    const parsedInput = parseInput(testInput);
    expect(parsedInput).toEqual(testInput);
  });

  it("getColumns should return the columns", () => {
    const rows = [
      "abc", 
      "def", 
      "ghi"
    ];
    const expectedColumns = ["adg", "beh", "cfi"];
    expect(getColumns(rows)).toEqual(expectedColumns);
  });


  it("getTopLeftToBottomRightDiagonals should return the diagonals", () => {
    const rows = [
      "abc", 
      "def", 
      "ghi"
    ];
    const expectedDiagonals = ["aei", "bf", "c", "dh" , "g"];
    expect(getTopLeftToBottomRightDiagonals(rows)).toEqual(expectedDiagonals);
  });


  it("getBottomLeftToTopRightDiagonals should return the diagonals", () => {
    const rows = [
      "abc", 
      "def", 
      "ghi"
    ];

    const expectedDiagonals = ["gec", "hf", "i", "db", "a"]

    expect(getBottomLeftToTopRightDiagonals(rows.sort())).toEqual(expectedDiagonals);
  });


  it("getAnswerA should return the answer for the first part", () => {
    const parsedInput = parseInput(testInput);
    expect(getAnswerA(parsedInput)).toEqual(18);
  });


  it("getAnswerB should return the answer for the second part", () => {
    const parsedInput = parseInput(testInput);
    expect(getAnswerB(parsedInput)).toEqual(0);
  });

});


