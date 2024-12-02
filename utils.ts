import colors from "colors"

export function printAnswers(answers: {a: number, b: number}) {
    console.log(colors.bgGreen('-------------------'));
    console.log(colors.green(`answer a: ${answers.a}`));
    console.log(colors.green(`answer b: ${answers.b}`));
    console.log(colors.bgGreen('-------------------'));
}
