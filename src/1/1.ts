

// Advent of Code 2024 - Day 1
interface Input {
    leftColumn: number[];
    rightColumn: number[];
}

export function parseInput(inputRaw: string): Input {
    debugger;
    const leftColumn: number[] = [];
    const rightColumn: number[] = [];
    const lines = inputRaw.split("\n");
    for (const line of lines) {
        const [left, right] = line.split("   ");
        leftColumn.push(parseInt(left));
        rightColumn.push(parseInt(right));
    }
    return {
        leftColumn,
        rightColumn,
    };
}

export function sortInput(input: Input): Input {
    return {
        leftColumn: input.leftColumn.sort((a, b) => a - b),
        rightColumn: input.rightColumn.sort((a, b) => a - b),
    };
}

export function calculateDistance(sortedInput: Input): number[] {
    const distances: number[] = [];
    for (let i = 0; i < sortedInput.leftColumn.length; i++) {
        distances.push(
            Math.abs(sortedInput.leftColumn[i] - sortedInput.rightColumn[i])
        );
    }
    return distances;
}

export function sumDistances(distances: number[]): number {
    let sum = 0;
    for (const distance of distances) {
        sum += distance;
    }

    return sum;
}

export function calculateSimilarityScore(input: Input): number {
    let similarityScore = 0;
    for (const number of input.leftColumn) {
        const numberOfInstances = input.rightColumn.filter(
            (value) => value === number
        ).length;
        const score = number * numberOfInstances;
        similarityScore += score;
    }

    return similarityScore;
}

export function getAnswer(inputRaw: string) {
    const a = sumDistances(calculateDistance(sortInput(parseInput(inputRaw))));
    const b = calculateSimilarityScore(parseInput(inputRaw));
    return {
        a,
        b,
    };
}


