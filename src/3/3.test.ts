import { expect, describe, it } from "bun:test";
import { getTestInput } from "../../getInput";
import {
  extractValidMulOperations,
  getAnswerA,
  getAnswerB,
  parseInput,
  processOperations,
  removeDontedInput,
} from "./3";

const testInput = await getTestInput("3");

describe("Day 3 functions", () => {
  it("parseInput should parse input",  () => {

    const expectedParsedInput = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

    const parsedInput = parseInput(testInput);
    expect(parsedInput).toEqual(expectedParsedInput);
  });

  it("extractOperationsToArray", () => {
    const parsedInput = parseInput(testInput);
    const validMuls = extractValidMulOperations(parsedInput);
    const expectedResult = [ "mul(2,4)", "mul(5,5)", "mul(11,8)", "mul(8,5)" ]

    expect(validMuls).toEqual(expectedResult);
  })

  it("processOperations", () => {
    const parsedInput = parseInput(testInput);
    const validMulOperations = extractValidMulOperations(parsedInput)!;
    const result = processOperations(validMulOperations);
    expect(result).toEqual([8, 25, 88, 40]);
  });

  it("removeDontedInput", () => {
    const testInput = "do()thisShouldStaydon't()ThisShouldBeRmoveddo()ThisShouldStay"
    const dontsRemoved = removeDontedInput(testInput);

    expect(dontsRemoved).toEqual("do()thisShouldStaydo()ThisShouldStay");
  });;


  it("getAnswerA should return the answer for the first part", () => {
    const parsedInput = parseInput(testInput);
    expect(getAnswerA(parsedInput)).toEqual(161);
  });


  it("getAnswerB should return the answer for the second part", () => {
    const testInput = "do()mul(5,5)thisShouldStaydon't()ThisShouldBeRmovedmul(5,5)do()ThisShouldStaymul(25,3)"
    expect(getAnswerB(testInput)).toEqual(100);
  });

});


