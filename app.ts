import { argv } from "bun";
import { getInput } from "./getInput";
import { getAnswer } from "./src/1/1";
import { printAnswers } from "./utils";


const day = argv[2];

interface Answer {
    a: number;
    b: number;
}

async function saveOuput(answer: Answer, day: string) {
    const ouput = Bun.file(`./answers/${day}.txt`);
    const answers = `Answer for day ${day}:\n a: ${answer.a.toString()}\n b: ${answer.b.toString()}`;
    await Bun.write(ouput, answers)
    console.log(`Answer for day ${day} saved to answers/${day}.txt`);
}

switch (day) {
    case "1":
        const input = await getInput("1");
        const answers = getAnswer(input);
        printAnswers(answers);
        saveOuput(answers, "1");
        break;
    default:
        console.log("Please specify day to run, for example:");
        console.log("bun run app.ts 1");
        break;
}
