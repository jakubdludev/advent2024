// Advent of Code 2024 - Day 

export function parseInput(inputRaw: string): number[][] {
    return inputRaw.split('\n').map((row)=> {
        return row.split(' ').map((level) => parseInt(level));
    })
}

export function getAnswer(inputRaw: string) {

}


