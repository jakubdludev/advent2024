import { getTestInput } from "../../getInput";
import { parseInput, sortInput, calculateDistance, sumDistances, calculateSimilarityScore, getAnswer } from "./1";
import { expect, describe, it } from "bun:test";

const testInput = await getTestInput('1');

describe("Day 1", () => {
    it("should parse input and split into left / right columns", () => {
        const input = parseInput(testInput);
        expect(input.leftColumn).toEqual([3, 4, 2, 1, 3, 3]);
        expect(input.rightColumn).toEqual([4, 3, 5, 3, 9, 3]);
    });

    it("should sort columns by value ascending", () => {
        const input = parseInput(testInput);
        const sortedInput = sortInput(input);
        expect(sortedInput.leftColumn).toEqual([1, 2, 3, 3, 3, 4]);
        expect(sortedInput.rightColumn).toEqual([3, 3, 3, 4, 5, 9]);
    });

    it("should calculate distances between left and right columns", () => {
        const input = parseInput(testInput);
        const sortedInput = sortInput(input);
        const distances = calculateDistance(sortedInput);
        expect(distances).toEqual([2, 1, 0, 1, 2, 5]);
    });

    it("should sum distances", () => {
        const input = parseInput(testInput);
        const sortedInput = sortInput(input);
        const distances = calculateDistance(sortedInput);
        expect(sumDistances(distances)).toEqual(11);
    });

    it("should calculate similarity score", () => {
        const input = parseInput(testInput);

        const similarityScore = calculateSimilarityScore(input);
        expect(similarityScore).toEqual(31);
    });

    it("should return correct answer", () => {
        const answer = getAnswer(testInput);
        expect(answer.a).toEqual(11);
        expect(answer.b).toEqual(31);
    });
});
