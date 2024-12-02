import { printAnswers } from '../../utils';

// Advent of Code 2024 - Day 2
interface Input {
    leftColumn: number[];
    rightColumn: number[];
}


export function getAnswer(inputRaw: string) {
    const a = 5
    const b = 5
    printAnswers({a, b});
    return {
        a,
        b,
    };
}


