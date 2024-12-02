import colors from "colors"
import type { Answer } from "./types";

export function printAnswers(answers: Answer) {
    console.log(colors.bgGreen('-------------------'));
    console.log(colors.green(`answer a: ${answers.a}`));
    console.log(colors.green(`answer b: ${answers.b}`));
    console.log(colors.bgGreen('-------------------'));
}
